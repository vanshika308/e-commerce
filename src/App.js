import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import React,{useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/UI/Header';
import Products from './components/Products/Products';
import Footer from './components/UI/Footer';
import Cart from './components/Cart/Cart';
import ProductProvider from './store/ProductProvider';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import ProductDetail from './pages/ProductDetails';
import LoginPage from './pages/Login';
import AuthContext from './store/auth-context';


  
function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const authcntxt= useContext(AuthContext);
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
    <Router>
      <div>
        <header>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        </header>
        <main>
          <Switch>
            <Route path="/store" exact>
              <Products/>
            </Route>
            <Route path="/products" exact>
            {authcntxt.isLoggedIn && <Redirect to='/store'/>}
          {!authcntxt.isLoggedIn && <LoginPage/>}
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/contact">
              <ContactPage onAddUser={addUserHandler}/>
            </Route>
            <Route path="/products/:productId">
              <ProductDetail/>
            </Route>
            <Route path="/login">
          {!authcntxt.isLoggedIn && <LoginPage/>}
            </Route>
            <Route path="/about">
              <AboutPage/>
            </Route>
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>   
    </ProductProvider>
  );
}

export default App;