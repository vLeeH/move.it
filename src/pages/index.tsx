import Head from 'next/head'

import {GetServerSideProps} from 'next'

import { ChallengeBox } from '../components/ChanllengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../style/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengesContexts'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  console.log(props)

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Home | move.it</title>
          <link rel="icon" href="./favicon.png" type="image/png" />
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};