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
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <div className="container__row container--space-between u-mar-t-md o-flex-al-stretch">
        {Skills.map((skill, key) => <div key={key} className="skill container__column "><img src={`/${imageName(skill)}-logo.svg`} alt={skill}/><span>{skill}</span></div>)}
      </div>
    </div>
  </div>
  )
}
  
export default AboutMe;