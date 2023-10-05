import { useRef, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef()

  const toggleNavBar = () => {
     navRef.current.classList.toggle('active')
     console.log(navRef)
  }

  return (
    <header className="w-[100%] h-20 bg-blue-950 flex items-center justify-between">
      
      <div className="logo flex items-center  max-w-[300px]">
        <img
          src="../img/img-1.png"
          className=" max-h-[65px] md:max-h-20  w-auto cursor-pointer "
        />

        <h1 className="logoname font-semibold text-gray-200 ">
          Факультет електроніки та комп'ютерних технологій
        </h1>
      </div>

      <div className="hamburger" onClick={toggleNavBar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav ref={navRef} className='nav-bar' >
        <ul className="flex items-center">
          <li><a>Новини</a></li>
          <li><a>Вступнику</a></li>
          <li><a>Студенту</a></li>
          <li><a target="_blank" href="http://194.44.208.156/moodle/">E-learning</a></li>
          <li><a>Контакти</a></li>
          <li><a>Особистий кабінет</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
