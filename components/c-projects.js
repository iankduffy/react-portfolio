import Link from 'next/link'

const Project = () => (
	// <Link href="/">
		<a className="c-project col-3 col-12@md c-project--disabled">
			<div className="c-project__image u-mar-b-md">
				<img src="/slash.jpg" lazy="true" />
			</div>
			<h3>Project Title</h3>
			<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit…</p>
			<button className="c-project__btn">View Project</button>
		</a>
	// </Link>
);
  
export default Project;