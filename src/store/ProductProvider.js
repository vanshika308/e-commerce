import React, { useContext, useState,useEffect } from 'react';
import ProductContext from './product-context';
import AuthContext from './auth-context';

const ProductProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0); 

  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.email) { // Check if email is available
      const modifiedEmail = authContext.email.replace(/[@.]/g, '');

      fetch(`https://crudcrud.com/api/8094b02135ad4023bcefc05c1ec206ef/cart${modifiedEmail}`)
        .then(response => response.json())
        .then(data => {
          setCartItems(data); 
          console.log(cartItems)
          setTotalItems(data.length)// Update cart items state
        })
        .catch(error => {
          console.error('Error fetching cart items:', error);
        });
    }
  }, [setTotalItems]);
  
  console.log(cartItems)
 

  const addItemToCart = (product) => {
    const modifiedEmail = authContext.email.replace(/[@.]/g, '');
    const existingCartItem = cartItems.find(item => item._id === product._id);
  
    if (existingCartItem) {
      const updatedCartItems = cartItems.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
  
      setCartItems(updatedCartItems);
  
      // Update the quantity on the server
      fetch(`https://crudcrud.com/api/8094b02135ad4023bcefc05c1ec206ef/cart${modifiedEmail}/${existingCartItem._id}`, {
        method: 'PUT',
        body: JSON.stringify({ 
          quantity: existingCartItem.quantity + 1 ,
          price: existingCartItem.price,
          title: existingCartItem.title,
          imageUrl: existingCartItem.imageUrl}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update item quantity');
        }
      }).then(data => {
        console.log(data); 
        console.log('Item added to cart successfully');
        setCartItems(prevCartItems => [...prevCartItems, data]);
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      // Add the new item to the cart on the server
      fetch(`https://crudcrud.com/api/8094b02135ad4023bcefc05c1ec206ef/cart${modifiedEmail}`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json(); 
        } else {
          throw new Error('Failed to add item to cart');
        }
      })
      .then(data => {
        console.log(data); 
        console.log('Item added to cart successfully');
        setCartItems(prevCartItems => [...prevCartItems, data]);
      })
      .catch(error => {
        console.error(error);
      });
    }
  };
  
     

  const removeItemFromCart = (itemID) => {
    const modifiedEmail = authContext.email.replace(/[@.]/g, '');
  
    fetch(`https://crudcrud.com/api/8094b02135ad4023bcefc05c1ec206ef/cart${modifiedEmail}/${itemID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        const updatedCartItems = cartItems.filter(cartItem => cartItem._id !== itemID);
        setCartItems(updatedCartItems);
  
        console.log('Item removed from cart successfully');
      } else {
        throw new Error('Failed to remove item from cart');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  const cartContext = {
    items: cartItems,
    addItem: addItemToCart,
    totalItems: totalItems,
    removeItem: removeItemFromCart,
  };

  return (
    <ProductContext.Provider value={cartContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;