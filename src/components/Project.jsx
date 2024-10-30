import { useRef, useState } from 'react';
import AnchorToGitHub from './AnchorToGithub';
import useFadeInIntersectionObserver from './useFadeInIntersectionObserver';

function Project({
  lgStyle,
  title,
  subtitle,
  textBody,
  href,
  createdUsingIcons,
  vcsIcon,
  hostedWithIcons,
}) {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const ref = useRef(null); // Create a ref for the component

  useFadeInIntersectionObserver(ref, setIsVisible);

  return (
    <div
      ref={ref}
      className={`relative flex h-fit w-full flex-col rounded-md border border-graphite bg-gray px-3 pb-3 pt-2 ${lgStyle ? lgStyle : ''} ${isVisible ? 'fade-in-y' : 'opacity-0'}`}
    >
      <h2 className="font-mono">
        <b>{title}</b> {subtitle && <span className="text-xs">{subtitle}</span>}
      </h2>
      <p className="pb-4 pt-2 text-sm" dangerouslySetInnerHTML={{ __html: textBody }} />
      <AnchorToGitHub link={href} />
      <p className="pb-2 pt-4 font-mono text-sm">CREATED USING</p>
      <div className="flex flex-wrap gap-3">
        {createdUsingIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="project-icon"
            draggable="false"
            className="h-8 max-w-8 select-none"
          />
        ))}
      </div>
      {vcsIcon && (
        <>
          <p className="pb-2 pt-4 font-mono text-sm">VERSION CONTROL SYSTEM</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="w-fit select-none"
          >
            <img src={vcsIcon} draggable="false" className="h-8 w-fit" />
          </a>
        </>
      )}
      {hostedWithIcons && (
        <>
          <p className="pb-2 pt-4 font-mono text-sm">HOSTED WITH</p>
          <div className="flex flex-wrap gap-3">
            {hostedWithIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                draggable="false"
                className="max-h-[1.4rem] w-9 select-none"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
