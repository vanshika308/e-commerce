import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = (props) => {


   const[enteredName,setEnteredName]= useState('');
   const[enteredEmail,setEnteredEmail]= useState('');
   const[enteredPhoneNo,setEnteredPhoneNo]= useState('');


   const nameChangeHandler=(event)=>{
    setEnteredName(event.target.value);
   }
   const emailChangeHandler=(event)=>{
    setEnteredEmail(event.target.value);
   }
   const phoneChangeHandler=(event)=>{
    setEnteredPhoneNo(event.target.value);
   }

  const submitHandler=(event)=>{
    event.preventDefault();
    const user={
        name: enteredName ,
        email : enteredEmail  ,
        phoneno : enteredPhoneNo,
        id: Math.random(),
    }
    console.log("user",user)
     props.onAddUser(user);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredPhoneNo('');
  };





  return (
    <Container className="mt-5 pb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form className="p-4 border rounded bg-light">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"  onChange={nameChangeHandler} value={enteredName}/>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={emailChangeHandler} value={enteredEmail}/>
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" onChange={phoneChangeHandler} value={enteredPhoneNo}/>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3" onClick={submitHandler}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
