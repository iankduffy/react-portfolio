import React from 'react'
import Layout from '../components/layout'
import SplashScreen from '../components/splash-screen'
import AboutMe from '../components/about-me'
import WorkExperience from '../components/work-experience'
import FullWidthLink from '../components/full-width-link'
import Projects from '../components/projects'
import '../components/svg/fontawesome';

const Home = () => (
  <div>
    <Layout>
      <SplashScreen/>
      <AboutMe/>
      <WorkExperience/>
      <FullWidthLink/>
      <Projects />
    </Layout>
  </div>
)

export default Home
