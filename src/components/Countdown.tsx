import { useState, useEffect, useContext } from 'react';
import { ChallengerContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
  const MyContext = useContext(ChallengerContext);

  let countdownTimeout : NodeJS.Timeout
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown(){
    setIsActive(!isActive);
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

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

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      

      {
        hasFinished ? (
          <button 
            disabled={true}
            className={styles.countdownButton}
          >Ciclo encerrado</button>
        ) : (
          <>
            {
              (isActive) ?(
                <button 
                  type="button" 
                  className={`${styles.countdownButton} ${styles.activatedCountdownButton}`}
                  onClick={resetCountdown}
                >Abandonar ciclo</button>
              ) : (
                <button 
                  type="button" 
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >Iniciar um ciclo</button>
              )
            }
          </>
        )
      }
    </div>
  );
}