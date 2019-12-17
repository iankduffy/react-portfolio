import React from 'react'
import Layout from '../components/layout'
import SplashScreen from '../components/splash-screen'
import AboutMe from '../components/about-me'
import WorkExperience from '../components/work-experience'
import FullWidthLink from '../components/full-width-link'
import Projects from '../components/projects'
import InstagramImage from '../components/instagram-photo'
import '../components/svg/fontawesome';

const Home = () => (
  <div>
    <Layout>
      <SplashScreen/>
      <AboutMe/>
      <WorkExperience/>
      {/* <FullWidthLink/> */}
      <Projects />
      <h2 className="u-t-cen">See What I'm Doing</h2>
      <div className="container--fluid u-mar-t-md container__row">
        {Array(4).fill(<InstagramImage/>)}
      </div>
    </Layout>
  </div>
)

export default Home
