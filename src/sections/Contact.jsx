import { useState, useRef } from 'react';
import useFadeInIntersectionObserver from '../components/useFadeInIntersectionObserver';
import clipboardCopyIcon from '../assets/contact_icons/clipboard-copy.svg'
import clipboardCheckIcon from '../assets/contact_icons/clipboard-check.svg'
import linkIcon from '../assets/contact_icons/link.svg'

const Contact = ({ sectionRef }) => {
  const [isVisible, setIsVisible] = useState(false)
  const formRef = useRef(null)
  useFadeInIntersectionObserver(formRef, setIsVisible)

  const [isCopied, setIsCopied] = useState(false)
  
  const writeToClipboard = async () => {
    const emailText = document.getElementById('emailToCopy').textContent
    await navigator.clipboard.writeText(emailText).then(() => {
      console.log(`'${emailText}' is copied to clipboard.`)
      setIsCopied(true)
      // Resolved - text copied to clipboard successfully
    }, () => {
      console.error('Failed to copy.')
      setIsCopied(false)
      // Rejected - text failed to copy to the clipboard
    })
  }
  
  const checkClipboardWritePermission = async () => {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        writeToClipboard()
      } else {
        console.log('Insufficient clipboard-write permission.')
      }
    })
  }

  return (
    <section ref={sectionRef} className='flex flex-col w-full gap-9'>
      <h1>Feel free to send me a message...</h1>
      <div
      ref={formRef}
      className={`flex flex-col w-full lg:w-2/3 min-w-fit 
      bg-gray border border-graphite rounded-md p-3 gap-6
      ${isVisible ? 'fade-in-y' : 'opacity-0'}`}
      >
        <h2 className='font-mono font-bold'>CONCTACT INFORMATION</h2>
        <div>
          <h3 className='font-mono font-medium'>Email:</h3>
          <div className='flex flex-wrap gap-2'>
            <p id='emailToCopy'>theo.sohlman@gmail.com</p>
            <button
            type='button'
            aria-label='Copy email'
            onClick={() => {checkClipboardWritePermission()}}
            className='flex items-center font-mono font-medium text-xs text-green active:text-light-green'
            >
              <img 
              src={isCopied ? clipboardCheckIcon : clipboardCopyIcon}
              alt='clipboard icon'
              className='h-4 w-auto'
              />
              {isCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        <div>
          <h3 className='font-mono font-medium'>Phone:</h3>
          <p>(+46) 070-689 38 39</p>
        </div>
        <a 
        href={'mailto:theo.sohlman@gmail.com'}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Send an email'
        className='flex gap-1 w-fit font-mono font-medium text-sm 
        text-green active:text-light-green'
        >
          <img src={linkIcon} alt='link icon' className='w-5 h-auto'/>
          Send an email
        </a>
      </div>
    </section>
  )
}
export default Contact