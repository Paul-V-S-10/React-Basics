import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../Hooks/ContextManager'


const Navbar = () => {
  const {count} = useContext(MyContext)
  return (
    <div className='navbar'>
      <div className="container">
        <div className="sectionOne">
          <img src="paulLogo.png" className='logo' alt="" />
        </div>
        <div className="sectionTwo">
          <div className="sectionTwoMain">
            <div className="linkContainer">
              <Link to={'/'} className='link'>Home</Link>
            </div>
            <div className="linkContainer">
              <Link to={'/About'} className='link'>About</Link>
            </div>
          </div>
        </div>
        <div className="sectionThree">{count}</div>
      </div>
    </div>
  )
}

export default Navbar