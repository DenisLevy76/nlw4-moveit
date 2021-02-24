import styles from '../styles/components/ExpBar.module.css'
import {ChallengerContext} from '../contexts/ChallengesContext'
import { useContext } from 'react';

export function ExpBar(){
  const {expToNextLevel, currentExp} = useContext(ChallengerContext)
  const porcentToNextLevel = currentExp * 100 / expToNextLevel
  
  return(
    <header className={styles.expBar}>
      <span>0 exp</span>
      <div>
        <div style={{width: `${porcentToNextLevel}%`}}/>
        <span className={styles.currentExperience} style={{left: `${porcentToNextLevel}%`}}>{currentExp}</span>
      </div>
      <span>{expToNextLevel} exp</span>
    </header>
  );
}
