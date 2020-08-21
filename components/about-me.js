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
    <section className="container container__row container__row--v-center u-mar-v-lg u-pad-h-md u-no-wrap" id="about">
      <div className="col-4 col-12@md u-t-cen u-bor-gen u-pad-v-xl@md-min u-pad-v-md u-order-2@md u-pad-h-0 u-pad-h-lg@md-min">
        <h2>Links</h2>
        <div className="container__row container--space-evenly u-mar-t-md">
          <a className="o-link" href="https://github.com/iankduffy" aria-label="My Github" target="_blank" rel="noopener"><FontAwesomeIcon icon={faGithubSquare} /></a>
          <a className="o-link" href="https://www.linkedin.com/in/iankduffy" aria-label="My Linkedin" target="_blank" rel="noopener"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="o-link" href="https://www.instagram.com/duffeh_leeds/" aria-label="My Instagram" target="_blank" rel="noopener"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div className="col-8 col-12@md u-pad-l-lg u-pad-l-0@md">
        <h2>About Me</h2>
        <p>I am a Web Developer based in Leeds, West Yorkshire. Who enjoys designing and building websites, using multiple languages and tools. Currently working on Ruby on Rails site with ES6 and SASS, with multiple side projects using Javascript, ReactJS and other frameworks.</p>
        <p>I moved up to Leeds for University in 2012, where I studied Creative Media Technology at Leeds Metropolitan University, to gradute in 2015 with a 2.1 Degree Classification. In my Course I had to develop and demonstrate both my design and programming skills in variety of projects such as building responsive dynamic websites, building mobile game in Unity, both 2D and 3D animation, and visual brand communication.</p>
        <p>Outside of work, I work on multiple projects including both design and development helping pushing my skills forward, going the gym, playing rugby and doing gymanstics, aswell as attending events like LeedsJS and Leeds Digital Drinks.</p>
        <div className="container__row container--space-between u-mar-t-md o-flex-al-stretch">
          {Skills.map((skill, key) => <div key={key} className="skill container__column "><img src={`/${imageName(skill)}-logo.svg`} alt={skill} lazy="true"/><span>{skill}</span></div>)}
        </div>
      </div>
    </section>
  )
}
  
export default AboutMe;