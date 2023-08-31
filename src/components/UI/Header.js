import React,{useContext,useState,useEffect} from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import CartButton from '../Cart/CartButton';
import ProductContext from '../../store/product-context';
import AuthContext from '../../store/auth-context';
function Header(props) {


  const productcntxt = useContext(ProductContext);
 const authcntxt =  useContext(AuthContext);


  return (
    <div>
      <Navbar bg="dark" variant="dark" className="d-flex justify-content-between pt-3 pb-3">
    
      <Nav className="justify-content-center" style={{ marginLeft: "22rem" }}>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/store">Store</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          {authcntxt.isLoggedIn ? (
             <button onClick={authcntxt.logout} className="nav-link">
                Logout
              </button>) : (
            <Nav.Link href="/login">Login</Nav.Link>)}
          </Nav.Item>
        </Nav>
        { authcntxt.isLoggedIn &&<CartButton onClick={props.onShowCart} totalItems={productcntxt.items.length} />}
        </Navbar>
      <Container fluid className="text-center h-20 bg-secondary text-white pt-5 pb-5">
        <h1>ORGANIC HARVEST</h1>
      </Container>
  
    </div>
  );
}

export default Header;