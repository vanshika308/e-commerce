import { useState ,useRef, useContext} from "react";
import { Container,Form,Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import AuthContext from "../store/auth-context";


const LoginPage =()=>{

  const authcntxt = useContext(AuthContext);
  const emailInputRef=useRef();
  const passwordInputRef= useRef();

  const[isLogin,setIsLogin]=useState(false);

  const history = useHistory();


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const enteredEmail= emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;

    let url;
    if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ3uVUPGpDugGVgto2YHimyfafltsSRGQ'
    }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ3uVUPGpDugGVgto2YHimyfafltsSRGQ'
    }

    fetch(url,{
        method:'POST',
        body: JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            res.json().then(data => {
                console.log(data);
                alert(data.error.message);
            });
        }
    }).then(data => {
        authcntxt.login(data.idToken);
        if (data) {
            history.push('/store');
        }
    }).catch(error => {
        console.error('Error:', error);
      });
    ;
  };


  return(
    <Container className="d-flex justify-content-center align-items-center vh-75">
    <Form onSubmit={submitHandler}>
      <h2 className="mb-4 mt-4">Login</h2>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          required ref={emailInputRef}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          required ref={passwordInputRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-4 mt-2">
        {isLogin?'Login':'Sign up'}
      </Button><br/>
      <button type='button' className='toggle mb-3'onClick={switchAuthModeHandler}>
        {isLogin ? 'Create new account' : 'Login with existing account'}
      </button>
    </Form>
  </Container>
);
};
export default LoginPage;