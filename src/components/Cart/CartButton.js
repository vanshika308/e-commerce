import React from 'react';
import { Button } from 'react-bootstrap';

const CartButton = (props) => {
  return (
    <Button 
        variant="outline-light"
        style={{ marginRight: '50px' }}
        onClick={props.onClick}>
        Cart
    </Button>
  );
};

export default CartButton;
