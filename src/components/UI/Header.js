import React,{useContext} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartButton from '../Cart/CartButton';
import ProductContext from '../../store/product-context';

function Header(props) {


  const productcntxt = useContext(ProductContext);

  const totalCartItems = productcntxt.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="d-flex justify-content-between pt-3 pb-3">
      <Navbar.Brand style={{ marginLeft: '50px' }} href="#home">My App</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Store">Store</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
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
