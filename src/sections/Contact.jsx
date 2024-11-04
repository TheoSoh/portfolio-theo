import { useEffect, useRef, useState } from 'react';
import clipboardCheckIcon from '../assets/contact_icons/clipboard-check.svg';
import clipboardCopyIcon from '../assets/contact_icons/clipboard-copy.svg';
import linkIcon from '../assets/contact_icons/link.svg';
import useFadeInIntersectionObserver from '../components/useFadeInIntersectionObserver';

const Contact = ({ sectionRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
  useFadeInIntersectionObserver(formRef, setIsVisible);

  const [isCopied, setIsCopied] = useState(false);

  const writeToClipboard = async () => {
    const emailText = document.getElementById('emailToCopy').textContent;
    await navigator.clipboard.writeText(emailText).then(
      () => {
        console.log(`'${emailText}' is copied to clipboard.`);
        setIsCopied(true);
        // Resolved - text copied to clipboard successfully
      },
      () => {
        console.error('Failed to copy.');
        setIsCopied(false);
        // Rejected - text failed to copy to the clipboard
      },
    );
  };

  const checkClipboardWritePermission = async () => {
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state == 'granted' || result.state == 'prompt') {
        writeToClipboard();
      } else {
        console.log('Insufficient clipboard-write permission.');
      }
    });
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <section ref={sectionRef} className="flex w-full flex-col gap-9 pt-20 md:pt-16 2xl:pt-28">
      <h1>Feel free to send me a message...</h1>
      <div
        ref={formRef}
        className={`flex w-full min-w-fit flex-col gap-6 rounded-md border border-graphite bg-gray p-3 lg:w-2/3 ${isVisible ? 'fade-in-y' : 'opacity-0'}`}
      >
        <h2 className="font-mono font-bold">CONCTACT INFORMATION</h2>
        <div>
          <h3 className="font-mono font-medium">Email:</h3>
          <div className="flex flex-wrap gap-2">
            <p id="emailToCopy">theo.sohlman@gmail.com</p>
            <button
              type="button"
              aria-label="Copy email"
              onClick={() => {
                checkClipboardWritePermission();
              }}
              className="flex items-center font-mono text-xs font-medium text-green active:text-light-green"
            >
              <img
                src={isCopied ? clipboardCheckIcon : clipboardCopyIcon}
                alt="clipboard icon"
                className="h-4 w-auto"
              />
              {isCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-mono font-medium">Phone:</h3>
          <p>(+46) 070-689 38 39</p>
        </div>
        <a
          href={'mailto:theo.sohlman@gmail.com?subject=Hello Theo'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email"
          className="flex w-fit gap-1 font-mono text-sm font-medium text-green active:text-light-green"
        >
          <img src={linkIcon} alt="link icon" className="h-auto w-5" />
          Send an email
        </a>
      </div>
    </section>
  );
};
export default Contact;
