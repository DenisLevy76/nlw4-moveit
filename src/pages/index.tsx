import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompleteChallengers } from '../components/CompleteChallengers'
import { Countdown } from '../components/Countdown'
import { ExpBar } from '../components/ExpBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'
import styles from '../styles/components/Home.module.css'
import {GetServerSideProps} from 'next';
import {ChallengesProvider} from '../contexts/ChallengesContext'

interface HomeProps{
  level: number;
  currentExp: number; 
  challengesCompleted:number;
}

export default function Home(props : HomeProps) {
  

  return (
    <ChallengesProvider 
      level={props.level} 
      currentExp ={props.currentExp} 
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
          
        </Head>
        <ExpBar/>
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompleteChallengers/>
              <Countdown/>
            </div>

            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) => {
  const {level, currentExp, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level: Number(level), 
      currentExp: Number(currentExp), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}