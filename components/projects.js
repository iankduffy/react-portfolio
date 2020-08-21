import Project from '../components/c-projects'

const Projects = () => {
  return (
    <section className="u-mar-v-lg" id="projects">
      <h2 className="u-t-cen">Projects</h2>
      <div className="container container__row u-mar-t-md u-pad-h-sm">
        <Project image="" title="SkyScrapers Trampoline Club" description="Working with the owner of SkyScrapers Trampoline Club, I designed and built their website using NextJs. The Client wanted the website to provide information for the club." isDisabled={false} link="https://www.skyscraperstrampolineclub.co.uk/"/>
        <Project image="" title="" description="" isDisabled={true}/>
        <Project image="" title="" description="" isDisabled={true}/> 
      </div>     
    </section>
  )
}
  
export default Projects;