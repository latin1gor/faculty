import { useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ArrowUpLeftFromCircle } from 'lucide-react'
const Navbar = () => {
  const navRef = useRef()

  const toggleNavBar = () => navRef.current.classList.toggle('active')

  return (
    <header className="w-[100%] h-[75px] text-sm  bg-black flex items-center justify-between">
      <Link to="/" className=" cursor-pointer font-semibold rounded-full">
        <ArrowUpLeftFromCircle size={28} className={'text-white'} />
      </Link>

      <div className="hamburger" onClick={toggleNavBar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav ref={navRef} className="nav-bar">
        <ul className="flex items-center justify-around">
          <div className="logo flex items-center  max-w-[300px]"></div>

          <li>
            <Link
              target="_blank"
              onClick={toggleNavBar}
              to="https://lnu.edu.ua/"
            >
              University Portal
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavBar} to="/applicant">
              Applicant
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavBar} to="/student">
              Student
            </Link>
          </li>
          <li>
            <Link target="_blank" to="http://194.44.208.156/moodle/">
              E-learning
            </Link>
          </li>
          <li>
            <Link onClick={toggleNavBar} to="/contacts">
              Contacts
            </Link>
          </li>
          <div className={'flex'}></div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
