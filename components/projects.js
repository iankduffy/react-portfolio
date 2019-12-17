import Project from '../components/c-projects'

const Projects = () => {
  return (
    <div className="u-mar-v-lg" id="projects">
      <h2 className="u-t-cen">Projects Coming Soon</h2>
      <div className="container container__row u-mar-t-md u-pad-h-sm">
        <Project/>
        <Project/>
        <Project/> 
      </div>     
    </div>
  )
}
  
export default Projects;