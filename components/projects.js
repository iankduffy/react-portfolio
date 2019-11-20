import Project from '../components/c-projects'

const Projects = () => {
  return (
    <div className="u-mar-v-lg">
      <h2 className="u-t-cen">My Projects</h2>
      <div className="container container__row u-mar-t-md">
        <Project/>
        <Project/>
        <Project/> 
      </div>     
    </div>
  )
}
  
export default Projects;