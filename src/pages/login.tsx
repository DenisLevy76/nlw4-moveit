import { Login } from "../components/Login";
import styles from "../styles/components/LoginPage.module.css";

export default function login(){
  return (
    <div className={styles.container}>
      <div></div>
      <Login />
      
    </div>
  )
}