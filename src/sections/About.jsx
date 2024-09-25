
const About = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className='scroll-target flex flex-col gap-8 w-full h-fit text-justify lg:text-left'>
      <p className='font-mono '>A little about me...</p>
      <p>I’m currently studying my <b>fifth term</b> at Örebro University, enrolled in the <b>Programme of Systems Analysis</b> (Systemvetenskapliga programmet). I have always had a strong connection to technology, with computers playing a key role in my life from a young age.</p>
      <p>Over the past two years, my academic journey has solidified my <b>passion</b> for problem-solving and building user-centric, robust and scalable systems. I thrive in environments where complex challenges need elegant and efficient solutions. <b>My goal</b> is to leverage my skills and knowledge to create impactful software that not only solves real-world problems but also enhances user experiences.</p>
      <p>My <b>attention to detail</b> ensures that the work I produce is not only functional but also meticulously crafted to meet high standards of usability and quality.</p>
      <p>As I look toward <b>the next step</b> in my career, I’m excited to bring my commitment to excellence, eye for detail, and technical expertise into a professional setting.</p>
    </section>
  )
}

export default About