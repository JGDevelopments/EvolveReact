import React from 'react'
import {Button, Container, Navbar, Modal, Nav} from "react-bootstrap"
import {useState} from "react";


const NavbarComponenet = () => {
    const [show, setShow] = useState(false); //?
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}> Cart 0 Items </Button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Give Me Your Money!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Yea you heard it right :)</h1>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponenet