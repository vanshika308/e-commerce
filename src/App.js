import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header';
import Products from './components/Products/Products';
import Footer from './components/UI/Footer';
import Cart from './components/Cart/Cart';
import ProductProvider from './store/ProductProvider';


function App() {

  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  };
  const hideCartHandler =()=>{
    setCartIsShown(false);
  };

  return (
    <ProductProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
      <Products/>
      <Footer/>
    </ProductProvider>
      

  );
}

export default App;
