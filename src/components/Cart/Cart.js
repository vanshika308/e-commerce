import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ProductContext from '../../store/product-context';

const Cart = (props) => {
  const productContext = useContext(ProductContext);

  return (
    <Modal show={true} onHide={props.onClose}>
      <Modal.Header closeButton>Cart</Modal.Header>
      <Modal.Body>
        {productContext.items.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <img src={item.imageUrl} alt={item.title} style={{ width: '100px' }} />
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
