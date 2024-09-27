import Project from '../components/Project'
import htmlIcon from '../assets/project_icons/html5.svg'
import cssIcon from '../assets/project_icons/css3.svg'
import tailwindIcon from '../assets/project_icons/tailwindcss.svg'
import javascriptIcon from '../assets/project_icons/javascript.svg'
import csharpIcon from '../assets/project_icons/csharp.svg'
import reactIcon from '../assets/project_icons/react.svg'
import dotnetIcon from '../assets/project_icons/dotnet.svg'
import mssqlIcon from '../assets/project_icons/mssql.svg'
import githubOriginalIcon from '../assets/project_icons/github_original.svg'
import awsIcon from '../assets/project_icons/aws.svg'
import serverlessIcon from '../assets/project_icons/serverless.svg'
import pythonIcon from '../assets/project_icons/python.svg'
import netbeansIcon from '../assets/project_icons/netbeans.svg'
import javaIcon from '../assets/project_icons/java.svg'
import mysqlIcon from '../assets/project_icons/mysql.svg'

const Projects = ({ sectionRef }) => {
  const createdUsingIconsP1 = [htmlIcon, tailwindIcon, javascriptIcon, reactIcon]
  const hostedWithIconsP1 = [awsIcon, serverlessIcon]

  const createdUsingIconsP2 = [htmlIcon, cssIcon, csharpIcon, dotnetIcon, mssqlIcon]
  const createdUsingIconsP3 = [pythonIcon]
  const createdUsingIconsP4 = [csharpIcon, dotnetIcon]
  const createdUsingIconsP5 = [javaIcon, dotnetIcon, netbeansIcon, mysqlIcon]

  return (
    <section ref={sectionRef} className='scroll-target flex flex-col w-full gap-9'>
      <h1 className='w-full font-mono'>Go ahead, have a look at my projects...</h1>
      <div className='grid grid-cols-2 w-full gap-10'>
        <div className='flex flex-col col-span-2 xl:col-span-1 gap-10'>
          <Project 
          title='PORTFOLIO' 
          subtitle='(theosohlman.com)' 
          textBody='Single-page web application showcasing my profile and work. Focused on <b>front-end technologies</b> and <b>performance optimization</b>. Contact form sends an <b>HTTP request</b> through an <b>API end point</b> to a <b>lambda function</b> which utilizes the <b>resend API</b> to send me an email.' 
          href='https://github.com/TheoSoh/portfolio-theo' 
          createdUsingIcons={createdUsingIconsP1} 
          vcsIcon={githubOriginalIcon}
          hostedWithIcons={hostedWithIconsP1}
          />
          <Project 
          title='IMAGE TO ASCII-ART'
          textBody='Console based program that converts specified image to ASCII-art. Functionality is accessible through a <b>custom CLI</b> created with regular expressions. Includes unit testing through <b>unittest</b> library.' 
          href='https://github.com/TheoSoh/image-to-ascii-art' 
          createdUsingIcons={createdUsingIconsP3}
          />
        </div>
        
        <div className='flex flex-col col-span-2 xl:col-span-1 gap-10'>
          <Project 
          title='CV-WEB-APP'
          subtitle='(LinkedIn-like)'
          textBody='<b>ASP.NET Core MVC</b> web application. Main priority is <b>functionality</b> and <b>backend performance</b>. Includes user authentication, authorization and message’s.'
          href='https://github.com/TheoSoh/cv-web-app-aspnet-mvc' 
          createdUsingIcons={createdUsingIconsP2} 
          vcsIcon={githubOriginalIcon}
          />
          
          <Project 
          title='PODCAST MANAGER'
          textBody='<b>WinForm</b> based program that utilizes <b>serialization</b> and <b>deserialization</b> to store podcast data that is retrieved from an <b>RSS-feed</b>. Focuses on having a <b>layered system architecture</b>.' 
          href='https://github.com/TheoSoh/pod-project' 
          createdUsingIcons={createdUsingIconsP4}
          vcsIcon={githubOriginalIcon}
          />
        </div>
        <Project 
        lgStyle='col-span-2'
        title='BUSINESS MANAGEMENT PROGRAM'
        subtitle='(For a hatmaker)'
        textBody='Java-application that prioritize <b>functionality</b>. The GUI was created with NetBean’s drag and drop function. The system include <b>inventory</b> and <b>account management</b>, as well as a custom designed <b>MySQL-database</b>.' 
        href='https://github.com/TheoSoh/hattmakare-repository' 
        createdUsingIcons={createdUsingIconsP5}
        vcsIcon={githubOriginalIcon}
        />
      </div>
    </section>
  )
}

export default Projects