import { useContext } from 'react';
import { ChallengerContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal(){
  const {level, closeModal} = useContext(ChallengerContext)
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo nivel.</p>

        <button 
          type="button"
          onClick={closeModal}
        >
          <img src="icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
}