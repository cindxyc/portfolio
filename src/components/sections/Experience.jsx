import { v4 as uuidv4 } from 'uuid'
import { experience } from '/src/data.js'
import '/src/stylesheets/sections/Experience.css'

const Experience = () => {
  // Separate incoming experiences first
  const incomingExperience = experience.filter(exp => exp.incoming === true)
  const regularExperience = experience.filter(exp => !exp.incoming)

  // Group regular experiences by year (excluding incoming)
  const groupedExperience = regularExperience.reduce((acc, exp) => {
    const year = exp.end === 'Present' ? '2025' : exp.end.split(' ')[1] // Extract year from end date
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
          {/* Incoming Experience Section - Comment out this entire block if no incoming positions */}
          {incomingExperience.length > 0 && (
            <div className='Experience-year-group'>
              <div className='Experience-year'>
                <h3 className='Experience-year-title Experience-incoming-title'>INCOMING</h3>
              </div>
              <div className='Experience-positions'>
                {incomingExperience.map((exp) => (
                  <div key={uuidv4()} className='Experience-card'>
                    <div className='Experience-header'>
                      <h4 className='Experience-position'>{exp.position}</h4>
                      {exp.logo && (
                        exp.link ? (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='Experience-logo-link'
                          >
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className='Experience-logo'
                            />
                          </a>
                        ) : (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className='Experience-logo'
                          />
                        )
                      )}
                    </div>
                    <h5 className='Experience-company'>{exp.company}</h5>
                    <h5 className='Experience-duration'>
                      {formatDuration(exp.start, exp.end)}
                    </h5>
                    <div className='Experience-description'>
                      {exp.description.split('\n').map((line, index) => (
                        <p key={index} className='Experience-description-line'>
                          {line.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* End of Incoming Experience Section */}

          {/* Regular Experience Sections */}
          {sortedYears.map((year) => (
            <div key={year} className='Experience-year-group'>
              <div className='Experience-year'>
                <h3 className='Experience-year-title'>{year}</h3>
              </div>
              <div className='Experience-positions'>
                {groupedExperience[year].map((exp) => (
                  <div key={uuidv4()} className='Experience-card'>
                    <div className='Experience-header'>
                      <h4 className='Experience-position'>{exp.position}</h4>
                      {exp.logo && (
                        exp.link ? (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='Experience-logo-link'
                          >
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className='Experience-logo'
                            />
                          </a>
                        ) : (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className='Experience-logo'
                          />
                        )
                      )}
                    </div>
                    <h5 className='Experience-company'>{exp.company}</h5>
                    <h5 className='Experience-duration'>
                      {formatDuration(exp.start, exp.end)}
                    </h5>
                    <div className='Experience-description'>
                      {exp.description.split('\n').map((line, index) => (
                        <p key={index} className='Experience-description-line'>
                          {line.trim()}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* End of Regular Experience Sections */}
        </div>
      </div>
    </section>
  )
}

export default Experience