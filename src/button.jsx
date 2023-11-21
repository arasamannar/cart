import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Open Cart
      </Button>

      <Modal show={showCart} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
