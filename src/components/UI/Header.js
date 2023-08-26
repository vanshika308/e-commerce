import React,{useContext} from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import CartButton from '../Cart/CartButton';
import ProductContext from '../../store/product-context';
import AuthContext from '../../store/auth-context';
function Header(props) {


  const productcntxt = useContext(ProductContext);
 const authcntxt =  useContext(AuthContext);

  let totalCartItems = 0;

  for (const item of productcntxt.items) {
    totalCartItems += item.quantity;
  }

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
            <Nav.Link href="/login">{authcntxt.isLoggedIn?'Logout':'Login'}</Nav.Link>
          </Nav.Item>
        </Nav>
        <CartButton onClick={props.onShowCart} totalItems={totalCartItems}/>
        </Navbar>
      <Container fluid className="text-center h-20 bg-secondary text-white pt-5 pb-5">
        <h1>The generics</h1>
      </Container>
  
    </div>
  );
}

export default Header;
