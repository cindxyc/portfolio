// import { v4 as uuidv4 } from 'uuid'
// import { experience } from '/src/data.js'
// import Card from '/src/components/elements/Card'
// import '/src/stylesheets/sections/Projects.css'

// const Experience = () => {
// 	return (
// 		<section className='Experience section' id='experience'>
// 			<div className='container'>
// 				<h2 className='Experience-h2 section-head'>Experience.</h2>
// 				<div className='Experience-wrapper'>
// 					{experience.map((c) => (
// 						<Card
// 							logo={c.logo}
// 							position={c.position}
//                             company={c.company}
// 							key={uuidv4()}
// 						/>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default Experience


// import { experience } from '/src/data.js'
// import '/src/stylesheets/sections/Experience.css'

// const Experience = () => {
//   return (
//     <section className='Experience section' id='experiences'>
//       <div className='container'>
//         <h2 className='Experience-h2 section-head'>Experience.</h2>
//         <div className='Experience-timeline'>
//           {experience.map((exp, index) => (
//             <div key={index} className='Experience-item'>
//               <div className='Experience-marker'></div>
//               <div className='Experience-content'>
//                 <div className='Experience-header'>
//                   <h3 className='Experience-position'>{exp.position}</h3>
//                   <div className='Experience-company'>{exp.company}</div>
//                   <div className='Experience-duration'>
//                     {exp.start} - {exp.end}
//                   </div>
//                 </div>
//                 <p className='Experience-description'>{exp.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Experience


import { v4 as uuidv4 } from 'uuid'
import { experience } from '/src/data.js'
import '/src/stylesheets/sections/Experience.css'

const Experience = () => {
  // Group experiences by year
  const groupedExperience = experience.reduce((acc, exp) => {
    const year = exp.start.split(' ')[1] // Extract year from "May 2024"
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(exp)
    return acc
  }, {})

  // Sort years in descending order
  const sortedYears = Object.keys(groupedExperience).sort((a, b) => b - a)

  const formatDuration = (start, end) => {
    return `${start} - ${end}`
  }

  return (
    <section className='Experience section' id='experience'>
      <div className='container'>
        <h2 className='Experience-h2 section-head'>Experience.</h2>
        <div className='Experience-wrapper'>
          {sortedYears.map((year) => (
            <div key={year} className='Experience-year-group'>
              <div className='Experience-year'>
                <h3 className='Experience-year-title'>{year}</h3>
              </div>
              <div className='Experience-positions'>
                {groupedExperience[year].map((exp) => (
                  <div key={uuidv4()} className='Experience-card'>
                    <h4 className='Experience-position'>{exp.position}</h4>
                    <div className='Experience-company'>{exp.company}</div>
                    <div className='Experience-duration'>
                      {formatDuration(exp.start, exp.end)}
                    </div>
                    <p className='Experience-description'>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience