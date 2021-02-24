import styles from '../styles/components/CompleteChallengers.module.css'
import {ChallengerContext} from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function CompleteChallengers(){
  const {challengesCompleted}  = useContext(ChallengerContext);
  return(
    <div className={styles.CompleteChallengersContainer}>
      <span>Desafios completos:</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}