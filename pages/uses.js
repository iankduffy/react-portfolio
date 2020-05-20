import React,{useEffect} from 'react'
import Layout from '../components/layout'
import '../components/svg/fontawesome';
import { initGA, logPageView } from "../components/googleAnalytics.js"

const Uses = () => {

  const setup = ["MacBook Pro", "One Plus 6", "Extra Monitor", "Coffee", "Github"]
  const programmingLanguages = ["React/NextJs", "Ruby On Rails", "NodeJS", "Javascript", "SCSS"]
  const software = ["VS code", "Slack", "Chrome", "Adobe XD", "Postman", "Affinity Designer","Spotify"]
  // const software = ["VS code", "Slack", "Chrome", "Adobe XD", "Postman", "Spotify"]

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
        <div className="container u-mar-v-md u-pad-h-sm">
           <h1>/Uses</h1>
           <p className="h3">A page to list my set up, programming languages and software I use, and other resources I use on a daily basis.</p>
           <p className="h3">Visit more a <a href="https://uses.tech/">uses.tech</a></p>
           <h2>Set Up</h2>
           <ul>
             {setup.map(object => <li>{object}</li>)}
           </ul>
           <h2>Programming Languages</h2>
           <ul>
             {programmingLanguages.map(object => <li>{object}</li>)}
           </ul>
           <h2>Software</h2>
           <ul>
             {software.map(object => <li>{object}</li>)}
           </ul>
           <h2>Other Resources</h2>
        </div>
      </Layout>
    </div>
  )
}

export default Uses
