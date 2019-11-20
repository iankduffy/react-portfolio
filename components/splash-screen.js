import ProfilePic from '../components/c-profile-pic'

const SplashScreen = () => (
  <div className="c-screen u-pad-h-md">
    	<div className="container container__row container__row--v-center c-screen u-t-cen@md "> 
				<div className="col-5 container--center"><ProfilePic/></div>
				<div className="col-7 col-12@md container container__column">
					<h1>IAN DUFFY</h1>
          <p className="h2">Web Developer</p>
					<div className="container container__row u-mar-v-md">
						{/* <a className="c-btn col-4 u-mar-r-md" href="https://www.iankduffy.com/">My CV</a> */}
						<a className="c-btn col-5 u-mar-r-md" href="https://github.com/iankduffy">My Github</a>
					</div>
				</div>
			</div>
  </div>
)

export default SplashScreen
