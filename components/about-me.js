import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
  const Links = [faGithubSquare, faLinkedin, faInstagram]
  const Skills = ["Ruby On Rails", "React", "Javascript", "SASS", "Git", "Adobe XD"]

  const imageName = (skill) => {
    const img = skill.toLowerCase().split(' ').join('-')
    return img
  }

  return (
    <div className="container container__row container__row--v-center u-mar-v-lg u-pad-h-md" id="about">
    <div className="col-4 col-12@md u-t-cen u-bor-gen u-pad-v-xl@md-min u-pad-v-md u-order-2@md u-pad-h-0 u-pad-h-lg@md-min">
      <h2>Links</h2>
      <div className="container__row container--space-evenly u-mar-t-md">
        <a className="o-link" href="https://github.com/iankduffy" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a className="o-link" href="https://www.linkedin.com/in/iankduffy" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className="o-link" href="https://www.instagram.com/duffeh_leeds/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
    <div className="col-8 col-12@md u-pad-l-lg u-pad-l-0@md">
      <h2>About Me</h2>
      <p>I am a Web Developer based in Leeds, West Yorkshire. Who enjoys designing and building websites, with multiple languages and tools. Currently working with Ruby on Rails site, with multiple side projects using vanilla Javascript, reactJS and other frameworks.</p>
      <p>I moved up to Leeds for University in 2012, where I studied Creative Media Technology at Leeds Metropolitan University, to gradute in 2015 with a 2.1. In the Course I had to develop and demonstrate both design and programming skills in variety of projects such as building responsive dynamic websites, building mobile game in Unity, both 2D and 3D animation, and visual brand communication.</p>
      <p>Outside of work, I work on multiple projects including both design and development, going the gym, playing rugby and doing gymanstics, aswell as attending events like LeedsJS and Leeds Digital Drinks.</p>
      <div className="container__row container--space-between u-mar-t-md o-flex-al-stretch">
        {Skills.map((skill, key) => <div key={key} className="skill container__column "><img src={`/${imageName(skill)}-logo.svg`} alt={skill}/><span>{skill}</span></div>)}
      </div>
    </div>
  </div>
  )
}
  
export default AboutMe;