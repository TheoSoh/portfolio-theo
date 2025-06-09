const About = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="scroll-target flex h-fit w-full flex-col gap-8 pb-20 md:pb-16 2xl:pb-28"
    >
      <p className="font-mono">A little about me...</p>
      <p>
        I recently graduated from the <b>Programme of Systems Analysis</b> at Örebro University in
        Sweden. My passion for technology began early in life, with computers having played a
        central role in shaping my interests and skills over the years.
      </p>
      <p>
        My academic journey has further deepened this passion, especially
        for problem-solving and designing user-centric, robust, and scalable systems. I thrive in
        environments where complex challenges need elegant and efficient solutions. <b>My goal</b>{' '}
        is to leverage my skills and knowledge to create impactful solutions that not only solves
        real-world problems but also enhances user experiences.
      </p>
      <p>
        My <b>attention to detail</b> and <b>analytical ability</b> ensures that the work I produce is not only functional but
        also meticulously crafted to meet high standards of usability, quality and performance.
      </p>
      <p>
        As I look toward <b>the next step</b> in my career, I’m excited to bring my commitment to
        excellence, eye for detail and technical expertise into a professional setting.
      </p>
    </section>
  );
};

export default About;
