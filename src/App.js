import {createBrowserRouter, RouterProvider, } from 'react-router-dom';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header';
import Products from './components/Products/Products';
import Footer from './components/UI/Footer';
import Cart from './components/Cart/Cart';
import ProductProvider from './store/ProductProvider';
import AboutPage from './pages/About';

const routes =createBrowserRouter(
  [ {path:'/',element:<Products/>},
    { path: '/About', element: <AboutPage></AboutPage>}
  ])

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
       <RouterProvider router={routes}/>
      <Footer/>
    </ProductProvider>
  );
}

export default App;
