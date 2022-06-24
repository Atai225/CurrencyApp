import React from 'react'
import {NavLink} from 'react-router-dom';
import './Navigation.css'
function Navigation() {
  return (
	  <nav>
		  <NavLink className='nav__link' to='/'>Currency</NavLink>
		  <NavLink className='nav__link' to='/converter'>Converter</NavLink>
	  </nav>
  )
}

export default Navigation