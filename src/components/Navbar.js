import React from 'react'
import {Button, Container, Navbar, Modal, Nav} from "react-bootstrap"


const NavbarComponenet = () => {
  return (
    <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Button> Cart 0 Items </Button>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponenet