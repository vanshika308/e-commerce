import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header';
import Products from './components/Products/Products';
import Footer from './components/UI/Footer';
import Cart from './components/Cart/Cart';


function App() {

  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  };
  const hideCartHandler =()=>{
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
