import {createBrowserRouter, RouterProvider, } from 'react-router-dom';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header';
import Products from './components/Products/Products';
import Footer from './components/UI/Footer';
import Cart from './components/Cart/Cart';
import ProductProvider from './store/ProductProvider';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';


  
function App() {

  const routes =createBrowserRouter(
    [ {path:'/',element:<Products/>},
      { path: '/About', element: <AboutPage/>},
      {path: '/Home', element: <HomePage/>},
      {path:'/Contact', element:<ContactPage onAddUser={addUserHandler}/>}
    ])
  

  const [cartIsShown,setCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
  };
  const hideCartHandler =()=>{
    setCartIsShown(false);
  };


  async function addUserHandler(user) {
    const response = await fetch('https://e-commerce-11e66-default-rtdb.firebaseio.com/user.json', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

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
