import { useRef} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef()

  const toggleNavBar = () => navRef.current.classList.toggle('active')
     
  return (
    <header className="w-[100%] h-24  bg-gray-950 flex items-center justify-between">
      
      <div className="logo flex items-center  max-w-[300px]">
        <img
          src="../img/img-1.png"
          className=" max-h-[85px] md:max-h-20  w-auto cursor-pointer "
        />
        <div className='text-gray-300'>
        <Link to='/' className="logoname cursor-pointer font-semibold  ">
        Faculty of Electronics and Computer Technologies
        </Link>
        </div>
        
      </div>

      <div className="hamburger" onClick={toggleNavBar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav ref={navRef} className='nav-bar' >
        <ul className="flex items-center">
          <li><Link onClick={toggleNavBar} to='/news'>News</Link></li>
          <li><Link onClick={toggleNavBar} to='/applicant'>Applicant</Link></li>
          <li><Link onClick={toggleNavBar} to='/student'>Student</Link></li>
          <li><Link  target="_blank" to="http://194.44.208.156/moodle/">E-learning</Link></li>
          <li><Link onClick={toggleNavBar} to='/contacts'>Contacts</Link></li>
          <li><Link className='font-bold'>Language</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
