import React from 'react';
import { Navbar, Nav ,Button,Container} from 'react-bootstrap';

function YourComponent() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between pt-3 pb-3" >
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Nav className="justify-content-center">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Store">Store</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
      </Nav>
      <Button variant="outline-light">Cart</Button>
    </Navbar>
    <Container fluid className="text-center h-20 bg-secondary text-white pt-5 pb-5">
        <h1>The generics</h1>
      </Container>
    </div>
    
  );
}

export default YourComponent;

