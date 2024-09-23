import React from 'react'
import University from '../components/University'

const Education = () => {
  const oerebroUniversityCourses = [
    "Informatics, <b>Advanced course</b> (ongoing...)",
    "<b>Coping with Conflicts</b>",
    "Informatics, <b>.NET Web Applications</b>, Intermediate Course",
    "Informatics, <b>Database Management</b>, Intermediate Course",
    "Informatics, <b>Object Oriented Programming with C#</b>, Intermediate Course",
    "Informatics, <b>Web Client Programming</b>, Intermediate Course",
    "Informatics, <b>Interaction Design</b>, Intermediate Course",
    "Informatics, <b>Systems Development Project With Scrum and Extreme Programming</b>, Intermediate Course",
    "Informatics, <b>Analysis and Design</b>, Intermediate Course",
    "Informatics, <b>Requirements Engineering</b>, Intermediate Course",
    "Informatics, <b>Basic Course</b>",
  ]
  const luleaUniversityCourses = [
    "<b>Introduction to Artificial Intelligence</b>"
  ]
  const krisianstadUniversityCourses = [
    "<b>Introduction to Computer Security</b>"
  ]
  const stockholmUniversityCourses = [
    "<b>Programming Techniques</b>"
  ]
  const borasUniversityCourses = [
    "<b>Introduction to programming in Python</b>"
  ]
  const skovdeUniversityCourses = [
    "<b>Programming Fundamentals with C++</b>"
  ]

  return (
    <section className='flex flex-col w-full gap-9'>
      <h1 className='font-mono'>My completed or ongoing courses...</h1>
      <div className='flex flex-col w-full gap-8'>
        <University 
        universityTitle='Örebro University' 
        courses={oerebroUniversityCourses}
        />
        <University 
        universityTitle='Luleå University of Technology' 
        courses={luleaUniversityCourses}
        />
        <University 
        universityTitle='Kristianstad University' 
        courses={krisianstadUniversityCourses}
        />
        <University 
        universityTitle='Stockholm University' 
        courses={stockholmUniversityCourses}
        />
        <University 
        universityTitle='University of Borås' 
        courses={borasUniversityCourses}
        />
        <University 
        universityTitle='University of Skövde' 
        courses={skovdeUniversityCourses}
        />
        <div>
        <h2 className='font-mono text-xl'>Total Average International GPA: 4.0/4.0</h2>
        <p>(Highest possible grade in every course)</p>
        </div>
      </div>
    </section>
  )
}

export default Education