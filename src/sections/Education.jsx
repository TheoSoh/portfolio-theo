import University from '../components/University';

const Education = ({ sectionRef }) => {
  const oerebroUniversityCourses = [
    'Informatics, <b>Advanced course</b> (ongoing...)',
    '<b>Coping with Conflicts</b>',
    'Informatics, <b>.NET Web Applications</b>, Intermediate Course',
    'Informatics, <b>Database Management</b>, Intermediate Course',
    'Informatics, <b>Object Oriented Programming with C#</b>, Intermediate Course',
    'Informatics, <b>Web Client Programming</b>, Intermediate Course',
    'Informatics, <b>Interaction Design</b>, Intermediate Course',
    'Informatics, <b>Systems Development Project With Scrum and Extreme Programming</b>, Intermediate Course',
    'Informatics, <b>Analysis and Design</b>, Intermediate Course',
    'Informatics, <b>Requirements Engineering</b>, Intermediate Course',
    'Informatics, <b>Basic Course</b>',
  ];
  const luleaUniversityCourses = ['<b>Introduction to Artificial Intelligence</b>'];
  const krisianstadUniversityCourses = ['<b>Introduction to Computer Security</b>'];
  const stockholmUniversityCourses = ['<b>Programming Techniques</b>'];
  const borasUniversityCourses = ['<b>Introduction to programming in Python</b>'];
  const skovdeUniversityCourses = ['<b>Programming Fundamentals with C++</b>'];

  return (
    <section ref={sectionRef} className="scroll-target flex w-full flex-col gap-9">
      <h1 className="font-mono">My completed or ongoing courses...</h1>
      <div className="flex w-full flex-col gap-8">
        <University universityTitle="ÖREBRO UNIVERSITY" courses={oerebroUniversityCourses} />
        <University
          universityTitle="LULEÅ UNIVERSITY OF TECHNOLOGY"
          courses={luleaUniversityCourses}
        />
        <University
          universityTitle="KRISTIANSTAD UNIVERSITY"
          courses={krisianstadUniversityCourses}
        />
        <University universityTitle="STOCKHOLM UNIVERSITY" courses={stockholmUniversityCourses} />
        <University universityTitle="UNIVERSITY OF BORÅS" courses={borasUniversityCourses} />
        <University universityTitle="UNIVERSITY OF SKÖVDE" courses={skovdeUniversityCourses} />
        <div>
          <h2 className="font-mono text-xl">Average International GPA: 4.0/4.0</h2>
          <p>(Highest possible grade in every course)</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
