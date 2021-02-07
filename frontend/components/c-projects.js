import Link from 'next/link'

const Project = ({isDisabled, image, title, description, link}) => {
	const placementText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit…"
	return(
		<a href={link} className={`c-project col-3 col-12@md ${isDisabled ? "c-project--disabled" : ""}`} target="_blank" rel="noopener">
			<div className="c-project__image u-mar-b-md">
				<img src={image ? image : "/slash.jpg"} lazy="true" alt={title ? title : "code on the screen"} />
			</div>
			<h3 className="u-pad-h-xs">{title ? title : "Project Title"}</h3>
			<p className="u-pad-h-xs">{description ? description : placementText}</p>
			<button className="c-project__btn">View Project</button>
		</a>
	)
};
  
export default Project;