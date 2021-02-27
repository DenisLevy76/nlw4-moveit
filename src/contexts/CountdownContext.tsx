import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengerContext } from "./ChallengesContext";

interface CountdownProviderData{
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps{
  children : ReactNode;
}


export const CountdownContext = createContext({} as CountdownProviderData);

export function CountdownProvider({children} : CountdownProviderProps){
  const MyContext = useContext(ChallengerContext);
  

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  let countdownTimeout : NodeJS.Timeout

  function startCountdown(){
    setIsActive(!isActive);
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false)
    setTime(25 * 60);
  }

  // //fiz antes do curso, testando
  // useEffect( () => {
  //   if (time === 0 && MyContext.activeChallenge === null){
  //     setHasFinished(false)
  //     resetCountdown();
  //   }
  // }, [MyContext.activeChallenge])

  useEffect(() => {
    if(isActive && time > 0){
       countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0){
      setIsActive(false);
      setHasFinished(true)
      MyContext.startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  )
}