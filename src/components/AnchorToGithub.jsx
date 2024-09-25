
const AnchorToGitHub = ({link}) => {
    return (
      <a 
      href={link} 
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Open github.com'
      className='bg-green w-fit py-[0.1rem] px-2 rounded-md 
      border border-graphite font-mono text-sm lg:text-xs cursor-pointer
      hover:bg-gradient-to-t from-light-green to-green'>
          View code in GitHub
      </a>
    )
  }
  export default AnchorToGitHub