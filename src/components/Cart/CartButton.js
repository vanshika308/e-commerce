import React from 'react';
import { Button } from 'react-bootstrap';

const CartButton = (props) => {
  return (
    <Button 
        variant="outline-light"
        style={{ marginRight: '50px' }}
        onClick={props.onClick}>
         Cart ({props.totalItems})
    </Button>
  );
};

export default CartButton;
