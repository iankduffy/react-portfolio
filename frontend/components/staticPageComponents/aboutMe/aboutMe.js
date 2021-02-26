import styles from './aboutMe.module.scss'
import Block from '../../../lib/blockContent'
import urlFor from '../../../lib/image'


const AboutMe = ({heading, text, skills,...props}) => {
	console.log(props)

	return (
  <section className='container u-pad-v-md u-pad-h-md@md'>
    <div className="col-8 col-12@md">
      <h2>{heading}</h2>
      <Block blocks={text}/>
      <div className={styles.grid}>
        {skills.map((skill) => {        
        return(
        <div>
          {/* {console.log(skill.skillImg)} */}
          {skill.skillImg ? <img src={urlFor(skill.skillImg).width(100).height(100).auto('format').url()}/> : ''}
          <p>{skill.skillTitle}</p>
        </div>)
        })}
      </div>
    </div>
  </section>
)}

export default AboutMe
