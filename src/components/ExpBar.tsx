import styles from '../styles/components/ExpBar.module.css'

export function ExpBar(){
  return(
    <header className={styles.expBar}>
      <span>0 exp</span>
      <div>
        <div style={{width: '50%'}}/>
        <span className={styles.currentExperience} style={{left: '50%'}}>300</span>
      </div>
      <span>600 epx</span>
    </header>
  );
}