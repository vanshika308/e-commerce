import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Cart = (props) => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',      
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <Modal show={true} onHide={props.onClose}>
      <Modal.Header closeButton>Cart</Modal.Header>
      <Modal.Body>
        {productsArr.map((product, index) => (
          <div key={index}>
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.title} style={{ width: '100px' }} />
            <hr />
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
