import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AuthContext from '../../store/auth-context';
import ProductContext from '../../store/product-context';

const Cart = (props) => {
  const authContext = useContext(AuthContext);
  const { items: cartItem } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = () => {
    const modifiedEmail = authContext.email.replace(/[@.]/g, '');
    axios
      .get(`https://crudcrud.com/api/3f06bfd2be02475ca429f8bea0c78ee1/cart${modifiedEmail}`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Calculate the quantity of each item in the cart
  const cartItemQuantity = {};
  cartItem.forEach((item) => {
    if (cartItemQuantity[item.title]) {
      cartItemQuantity[item.title]++;
    } else {
      cartItemQuantity[item.title] = 1;
    }
  });

  // Calculate the total number of products and the total amount
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItem.reduce((total, item) => total + item.price, 0);

  return (
    
    <Modal show={true} onHide={props.onClose}>
    <Modal.Header closeButton>Cart</Modal.Header>
    <Modal.Body>
      {Object.keys(cartItemQuantity).map((title, index) => {
        const cartItem = cartItems.find((item) => item.title === title);

        if (!cartItem) {
          return null; // Skip rendering if cartItem is not found
        }

        return (
          <div key={index}>
            <h4>{title}</h4>
            <p>Price: ${cartItem.price}</p>
            <p>Quantity: {cartItemQuantity[title]}</p>
            <img
              src={cartItem.imageUrl}
              alt={title}
              style={{ width: '100px' }}
            />
            <hr />
          </div>
        );
      })}
      <div>
        <p>Total Products: {totalItems}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onClose}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
};

export default Cart;
