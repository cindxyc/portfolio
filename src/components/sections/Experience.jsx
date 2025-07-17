import { v4 as uuidv4 } from 'uuid'
import { experience } from '/src/data.js'
import Card from '/src/components/elements/Card'
import '/src/stylesheets/sections/Projects.css'

const Experience = () => {
	return (
		<section className='Experience section' id='experience'>
			<div className='container'>
				<h2 className='Experience-h2 section-head'>Experience.</h2>
				<div className='Experience-wrapper'>
					{experience.map((c) => (
						<Card
							position={c.position}
                            company={c.company}
							key={uuidv4()}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
