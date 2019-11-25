import Job from '../components/jobs'
import data from '../data/work-experience.json'

const WorkExperience = () => {
  return (
    <div id="work">
      <h2 className="u-t-cen u-t-l@md u-pad-h-sm@md">Work Experience</h2>
			{data.map((work, key) => <Job work={work} key={key}/>)}
    </div>
  )
}
  
export default WorkExperience; 