import Head from 'next/head'
import { CompleteChallengers } from '../components/CompleteChallengers'
import { Countdown } from '../components/Countdown'
import { ExpBar } from '../components/ExpBar'
import { Profile } from '../components/Profile'
import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExpBar/>

      <section>
        <div>
          <Profile/>
          <CompleteChallengers/>
          <Countdown/>
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}
