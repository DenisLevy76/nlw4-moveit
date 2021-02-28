import styles from '../styles/components/Login.module.css';

export default function Login(){
  return (
    <div className={styles.container}>
      <div>
        {/* <img src="icons/biglogo.svg" alt="logo"/> */}
      </div>

      <div className={styles.mainContainer}>
        <img src="icons/move-it.svg" alt="logo move.it"/>
        <strong>Bem-vindo</strong>
        <div className={styles.title}>
          <img src="icons/github.svg" alt="github"/>
          <p>Faça login com seu Github para começar</p>
        </div>
        <div className={styles.inputAndButton}>
          <input type="text" name="username" id="username" placeholder="Digite seu username"/>
          <button type="button"><img src="icons/seta.svg" alt=""/></button>
        </div>
      </div>
    </div>
  )
}