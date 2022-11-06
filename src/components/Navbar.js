import React from 'react'
import {Button, Container, Navbar, Modal, Nav} from "react-bootstrap"
import {useState, useContext} from "react";
import {CartContext} from "../CartContext";
import CartProduct from "./CartProduct";


const NavbarComponenet = () => {
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false); //?
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    const productTotal = cart.getTotalCost();

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href='/'>Evolve</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className='justify-content-end'>
                    { productsCount > 0 ?
                        <Button onClick={handleShow}> Cart {productsCount} Items </Button>
                        :
                        <Button onClick={handleShow}> Add To Your Cart </Button>
                    }
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Cart Total:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total ${cart.getTotalCost().toFixed(2 /* rounds the number */)}</h1>
                            <Button variant={"success"} className={"my-2"}>Checkout</Button>
                        </>

                        :

                        <h1>Nothing to see here.</h1>

                    }


                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponenet