import styles from '../styles/components/Profile.module.css'
import {ChallengerContext} from '../contexts/ChallengesContext'
import { useContext } from 'react'

export function Profile(){
  const {level} = useContext(ChallengerContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/DenisLevy76.png" alt="Imagem de perfil"/>
      <div>
        <strong>Denis Levy</strong>
        
        <p><img src="icons/level.svg" alt="level"/>Level {level}</p>
      </div>
    </div>
  )
}