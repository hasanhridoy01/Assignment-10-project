import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  //email and password Ref State 
  const emailRef = useRef('');
  const passwordRef = useRef('');

  //From Submit form submit handler
  const handleLoginFrom = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    alert(password);
  }
  return (
    <div className='container login'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <div className="card p-4 border-0 shadow">
            <h3>Please Login</h3>
          {/* <ToastContainer /> */}
            <Form onSubmit={handleLoginFrom}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
              </Form.Group>
              
              <p className='mb-0 mt-1'>New Form Onion Site? <Link to='/signup' className='register'>Registation</Link></p>
              <p className='mb-3 mt-1'>Unknown Your Password? <Link to='' className='register'>Forget Password</Link></p>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;