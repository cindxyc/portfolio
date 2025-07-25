import { v4 as uuidv4 } from 'uuid'
import { projects } from '/src/data.js'
import Card from '/src/components/elements/Card'
import '/src/stylesheets/sections/Projects.css'

const Projects = () => {
	return (
		<section className='Projects section' id='projects'>
			<div className='container'>
				<h2 className='Projects-h2 section-head'>Projects.</h2>
				<div className='Projects-wrapper'>
					{projects.map((c) => (
						<Card
							name={c.name}
							description={c.description}
							stack={c.stack}
							linkProject={c.linkProject}
							linkGithub={c.linkGithub}
							key={uuidv4()}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
