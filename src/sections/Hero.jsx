import contactIcon from '../assets/socials_icons/contact.svg';
import githubIcon from '../assets/socials_icons/github.svg';
import instagramIcon from '../assets/socials_icons/instagram.svg';
import linkedinIcon from '../assets/socials_icons/linkedin.svg';
import Navigation from '../components/Navigation';

const Hero = () => {
  const socials = {
    linkedIn: [linkedinIcon, 'https://www.linkedin.com/in/theo-sohlman/'],
    instagram: [instagramIcon, 'https://www.instagram.com/theosohlman/'],
    github: [githubIcon, 'https://github.com/TheoSoh'],
    contact: [contactIcon, 'mailto:theo.sohlman@gmail.com?subject=Hello Theo'],
  };

  return (
    <section className="bg-transparent flex h-[60vh] w-full flex-col md:fixed md:h-[70vh] md:w-4/12">
      <h1 className="pb-4 text-6xl font-bold md:text-4xl lg:text-6xl">Theo Sohlman</h1>
      <h2 className="pb-8 text-lg font-semibold">Software Dev./Information Systems Student</h2>
      <p className="text-justify md:text-left 2xl:w-2/3">
        Eager to apply knowledge and experience to deliver value and innovation. Explore my work and
        discover how I can contribute to your next project.
      </p>
      <div className="flex h-full w-full flex-col justify-end">
        <Navigation />
        <a
          className="mb-6 w-fit rounded-md border border-graphite bg-green from-light-green to-green px-3 font-mono text-sm hover:bg-gradient-to-t"
          href="/CV_Theo_Sohlman.pdf"
          download="CV_Theo_Sohlman.pdf"
        >
          Download CV
        </a>
        <div className="flex h-fit w-full flex-wrap gap-6">
          {Object.values(socials).map(([icon, url], index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={icon}
                alt="social-icon"
                draggable="false"
                className="h-9 w-auto select-none rounded-md border border-graphite"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
