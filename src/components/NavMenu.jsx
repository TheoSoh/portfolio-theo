import React, { useState } from 'react'
import menuIcon from '../assets/nav_icons/menu.svg'
import closeIcon from '../assets/nav_icons/close.svg'

const MenuBanner = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <>
      <button onClick={toggleMenu} 
      className='fixed mr-6 mt-4 right-0 z-50'
      aria-label='Toggle menu'>
        <img src={isOpen ? closeIcon : menuIcon} className='w-6 h-6'/>
      </button>
      <div className={`${isOpen ? 'opacity-100 translate-x-0 pointer-events-auto':'opacity-0 translate-x-full pointer-events-none'} 
      transform transition-all duration-500 ease-in-out flex flex-col 
      bg-transparent h-fit w-10 fixed right-0 z-40`}>
        <div className='flex w-full h-screen max-h-[16vh] mt-12 
        items-center justify-center'>

        </div>
      </div>
    </>
  )
}

export default MenuBanner