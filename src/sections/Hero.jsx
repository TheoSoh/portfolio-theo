import linkedinIcon from '../assets/socials_icons/linkedin.svg'
import instagramIcon from '../assets/socials_icons/instagram.svg'
import githubIcon from '../assets/socials_icons/github.svg'
import contactIcon from '../assets/socials_icons/contact.svg'

const Hero = () => {
  const socialsIcons = [linkedinIcon, instagramIcon, githubIcon, contactIcon]

  return (
    <section className='flex flex-col bg-transparent w-full md:w-4/12 md:h-[calc(100vh-(7rem*2))] md:fixed'>
      <h1 className='font-bold text-6xl pb-4'>Theo Sohlman</h1>
      <h2 className='font-semibold text-lg pb-8'>Software Dev./Information Systems Student</h2>
      <p className='text-justify pb-36 lg:pb-0 md:text-left lg:w-2/3'>Eager to apply knowledge and experience to deliver value and innovation. Explore my work and discover how I can contribute to your next project.</p>
      <div className='flex flex-col justify-end w-full h-full'>
        <button className='bg-green w-fit font-mono text-sm border 
        border-graphite rounded-md px-3 mb-6 hover:bg-gradient-to-t from-light-green to-green'>
          Download CV
        </button>
        <div className='flex flex-wrap gap-4 w-full h-fit'>
          {socialsIcons.map((icon, index) =>(
            <img key={index} src={icon} className='w-auto h-8 
          border border-graphite rounded-md '/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero