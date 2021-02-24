import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';

interface Challenge {
  type: string;
  description : string;
  amount: number;
}

interface ChallengeContextData{
  level : number;
  currentLevel : number;
  currentExp : number;
  challengesCompleted : Number;
  activeChallenge : Challenge;
  expToNextLevel : number;
  levelUp : () => void;
  startNewChallenge : () => void;
  resetChallenge : () => void;
}

export const ChallengerContext = createContext({} as ChallengeContextData)

interface ChallengesProviderProps{
  children : ReactNode
}

export function ChallengesProvider({children} : ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentExp, setCurrentExp] = useState(143);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const expToNextLevel = Math.pow((level + 1) * 6,2)

  const levelUp = () => {
    setLevel(level + 1);
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }
  
  return (
    <ChallengerContext.Provider value={{
        level,
        currentLevel, 
        currentExp,
        challengesCompleted,
        activeChallenge,
        expToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengerContext.Provider>
  )
}
