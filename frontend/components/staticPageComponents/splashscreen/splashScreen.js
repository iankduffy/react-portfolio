import styles from './splashScreen.module.scss'
import urlFor from '../../../lib/image'
import srcSet from '../../../lib/srcset'

const SplashScreen = ({heading, tagline, backgroundImage, profileImage, ...props}) => {
	console.log(props)

	return (
  <section className={styles.splashScreen}>
		<img alt={heading} className={styles.backgroundImage} src={urlFor(backgroundImage).width(400).height(700).quality(80).auto('format').url()} srcSet={srcSet(backgroundImage, 1800)}/>
		<div className={styles.content}> 
			<img className={styles.profileImage} src={urlFor(profileImage).width(500).height(500).quality(80).auto('format').url()} alt={heading} />
			<div className="col-5 col-12@md">
				<h1>{heading}</h1>
				<p className="h2">{tagline}</p>
			</div>
		</div>
  </section>
)}

export default SplashScreen
