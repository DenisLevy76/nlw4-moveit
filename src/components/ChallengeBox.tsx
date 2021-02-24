import styles from '../styles/components/ChallengeBox.module.css'
import {ChallengerContext} from '../contexts/ChallengesContext'
import { useContext } from 'react';
export function ChallengeBox(){
  const {activeChallenge, resetChallenge} = useContext(ChallengerContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeBoxActive}>
          <header>
            {`Ganhe ${activeChallenge.amount} exp`}
          </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg` }alt="Imagem"/>
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              className={`${styles.button} `}
              type="button"
              onClick={resetChallenge}
            >Falhei</button>
            <button 
              className={`${styles.button}`}
              type="button"
            >Completei</button>
          </footer>

        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="seta pra cima"/>
            Complete-o e avance de nivel.
          </p>
        </div>
      )}
    </div>
  )
}