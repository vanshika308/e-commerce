import React, { useState } from 'react';
import ProductContext from './product-context';

const ProductProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  const cartContext = {
    items: cartItems,
    addItem: addItemToCartHandler,
  };

  return (
    <ProductContext.Provider value={cartContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
