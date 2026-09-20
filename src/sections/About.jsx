const About = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="scroll-target flex h-fit w-full flex-col gap-8 pb-20 md:pb-16 2xl:pb-28"
    >
      <p className="font-mono">A little about me...</p>
      <p>
        I hold a <b>Bachelor's degree in Informatics</b> from Örebro University, where I completed
        the <b>Systems Analysis Programme</b> in June 2025. Since graduating, I have worked with
        business development, machine virtualization, Networking and system integration, while also
        earning certifications in integration- and API development on the Frends integration platform.
      </p>
      <p>
        My main passion lies in web and software development. I enjoy building solutions that are
        both practical and well-structured, and I am motivated by the idea of using my development
        skills to solve real problems and create meaningful value. At the same time, continuous
        learning is a big part of who I am, and personal growth is something I place high value on
        in both my professional and personal life.
      </p>
      <p>
        I would describe myself as driven, analytical, and detail-oriented. I enjoy
        collaborating with others, understanding needs from different perspectives, and turning
        ideas into concrete solutions.
      </p>
      <p>
        Outside of tech, I have a strong interest in stocks and investing, and I also enjoy playing
        golf. I am also highly competitive by nature, which shows in gaming as well. For example, in
        CS2, I have ranked around 100 out of 120,000 players in Sweden on Faceit.
      </p>
    </section>
  );
};

export default About;
