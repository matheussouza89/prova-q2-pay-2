import React from 'react'
import { Navbar as Nav, NavbarBrand } from 'reactstrap'

const Navbar = () => {
  return (
    <Nav className="navbar-custom" dark expand="md">
      <NavbarBrand href="/">REACT</NavbarBrand>
    </Nav>
  )
}

export default Navbar
