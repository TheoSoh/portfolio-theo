import { useState, useRef } from 'react'
import AnchorToGitHub from "./AnchorToGithub"
import useFadeInIntersectionObserver from './useFadeInIntersectionObserver';

 function Project({ lgStyle, title, subtitle, textBody, href, createdUsingIcons, vcsIcon, hostedWithIcons }) {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const ref = useRef(null); // Create a ref for the component
  
  useFadeInIntersectionObserver(ref, setIsVisible)
  
  return (
    <div
    ref={ref}
    className={`flex flex-col bg-gray w-full h-fit relative 
    px-3 pt-2 pb-3 border border-graphite rounded-md 
    ${lgStyle ? lgStyle:''} ${isVisible ? 'fade-in-y' : 'opacity-0'}`}
    >
      <h2 className='font-mono'>
        <b>{title}</b> {subtitle && (<span className='text-xs'>{subtitle}</span>)}
      </h2>
      <p className=' pt-2 pb-4'
      dangerouslySetInnerHTML={{ __html: textBody }}
      />
      <AnchorToGitHub link={href}/>
      <p className='font-mono text-sm pt-4 pb-2'>CREATED USING</p>
      <div className='flex flex-wrap gap-3'>
        {createdUsingIcons.map((icon, index) => (
          <img key={index} src={icon} draggable='false' 
          alt='project-icon' className='h-8 max-w-8'
          />
        ))}
      </div>
      {vcsIcon && (
        <>
          <p className='font-mono text-sm pt-4 pb-2'>VERSION CONTROL SYSTEM</p>
          <a 
          href={href} 
          target='_blank' 
          rel='noopener noreferrer'
          referrerPolicy='no-referrer'
          className='w-fit'
          >
            <img src={vcsIcon} className='h-8 w-fit'/>
          </a>
        </>
      )}
      {hostedWithIcons && (
        <>
          <p className='font-mono text-sm pt-4 pb-2'>HOSTED WITH</p>
          <div className='flex flex-wrap gap-3'>
            {hostedWithIcons.map((icon, index) =>(
              <img key={index} src={icon} className='w-9 max-h-[1.4rem]'/>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Project