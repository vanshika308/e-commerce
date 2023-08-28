import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ProductContext from '../../store/product-context';

const CartButton = (props) => {

  const productcntxt = useContext(ProductContext);
  return (
    <Button 
        variant="outline-light"
        style={{ marginRight: '50px' }}
        onClick={props.onClick}>
         Cart ({productcntxt.totalItems})
    </Button>
  );
};

export default CartButton;