import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import '../assets/css/navbarOptions.css'

export const NavbarOptions = () => {

  return (
    <Nav className='ul-navOptions'>
        <NavItem className='options-item'>
            <Link to="/Options/user">Usuario</Link>
        </NavItem>
        <NavItem className='options-item'>
            <Link to="/Options/email">Email</Link>
        </NavItem>
        <NavItem className='options-item'>
            <Link to="/Options/">Configuracion</Link>
        </NavItem>
    </Nav>
  )
}
