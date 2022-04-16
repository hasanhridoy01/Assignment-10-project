import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  //email and password Ref State 
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  //From Submit form submit handler
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    alert(displayName);
  } 
  return (
    <div className='container signup'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow border-0 p-4">
            <h3>Please Regiater</h3>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} name='name' type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name='terms' id='terms' type="checkbox" label="Accept Terms and Condition" />
              </Form.Group>

              <p>Already have an account? <Link to='/login' className='loginbtn'>Login</Link></p>
              <button className='btn btn-primary'>Registation</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;