import React,{useEffect} from 'react'
import Layout from '../components/layout'
import SplashScreen from '../components/splash-screen'
import AboutMe from '../components/about-me'
import WorkExperience from '../components/work-experience'
// import FullWidthLink from '../components/full-width-link'
import Projects from '../components/projects'
// import InstagramContainer from '../components/instagram-container'
import '../components/svg/fontawesome';
import { initGA, logPageView } from "../components/googleAnalytics.js"

const Home = () => {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
      logPageView(window.location.pathname);
    }
  }, [])

  return(
    <div>
      <Layout>
        <SplashScreen/>
        <AboutMe/>
        <WorkExperience/>
        {/* <FullWidthLink/> */}
        <Projects />
        {/* <h2 className="u-t-cen">See What I'm Doing</h2>
        <InstagramContainer /> */}
      </Layout>
    </div>
  )
}

export default Home
