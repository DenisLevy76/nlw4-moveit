import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import challenges from '../../challenges.json';
import { CountdownContext } from "./CountdownContext";
import Cookies from 'js-cookie';
import { LevelUpModal } from "../components/LevelUpModal";



interface Challenge {
  type: string;
  description : string;
  amount: number;
}

interface ChallengeContextData{
  level : number;
  currentExp : number;
  challengesCompleted : Number;
  activeChallenge : Challenge;
  expToNextLevel : number;
  levelUp : () => void;
  startNewChallenge : () => void;
  resetChallenge : () => void;
  completeChallenge : () => void;
  closeModal : () => void;
}

interface ChallengesProviderProps{
  children : ReactNode
  level: number;
  currentExp: number; 
  challengesCompleted:number;
}

export const ChallengerContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({children, ...rest} : ChallengesProviderProps){
  //ao passar um array vazio no useEffect ele sempre executa 1x assim que o componente é executado.
  useEffect(() => {
    Notification.requestPermission();
  }, [])

  const [level, setLevel] = useState(rest.level || 0);
  const [currentExp, setCurrentExp] = useState(rest.currentExp || 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted || 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const expToNextLevel = Math.pow((level + 1) * 6,2);
  const expToNextLevelPreviw = (level) => Math.pow((level + 1) * 6,2);

  const levelUp = () => {
    const { amount } = activeChallenge;
    let finalExp = amount + currentExp;
    let finalLevel = level;
    
    while (finalExp >= expToNextLevelPreviw(finalLevel)){
      finalExp = finalExp - expToNextLevelPreviw(finalLevel);
      finalLevel += 1
      setIsLevelUpModalOpen(true)
      setLevel(finalLevel);
    }
    setCurrentExp(finalExp);
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    if (Notification.permission === 'granted'){
      new Notification('Novo desafio 🎉', {
        body:`Valendo ${challenge.amount}exp!`
      })
      new Audio('/notification.mp3').play();
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null);
  }

  const completeChallenge = () => {
    if (!activeChallenge){
      return;
    }else{
      levelUp();
      resetChallenge();
      setChallengesCompleted(challengesCompleted + 1);
    }
  }

  const closeModal = () => {
    setIsLevelUpModalOpen(false);
  }

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExp', String(currentExp));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExp, challengesCompleted])
  
  return (
    <ChallengerContext.Provider value={{
        level,
        currentExp,
        challengesCompleted,
        activeChallenge,
        expToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeModal
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengerContext.Provider>
  )
}
