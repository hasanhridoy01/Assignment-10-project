import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../HomePages/Loading/Loading'
import SocalLogin from '../HomePages/SocalLogin/SocalLogin';

const SignUp = () => {
  //email and password Ref State 
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  let errorElement;

  //user Registration use react firebase hooks
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,  {sendEmailVerification: true});

  //user profile update
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  //if email send some error will show 
  if(error || updatingError){
    errorElement = <p style={{color: 'red'}}>{error?.message}</p>;
  }

  //loading and updating show
  if(loading || updating){
    return <Loading></Loading>;
  }

  //user console.log to confirm registration;
  if(user){
    console.log(user);
  }

  //From Submit form submit handler
  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if(password.length < 6){
      toast('please at list 6 character password');
    }else{
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({displayName});
      toast('Updated profile');
      navigate('/');
    }
  } 
  return (
    <div className='container signup'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow border-0 p-4">
            <h3>Please Register</h3>
            <ToastContainer />
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
                <Form.Check onClick={() => setAgree(!agree)} name='terms' id='terms' type="checkbox" label="Accept Terms and Condition" />
              </Form.Group>

              <p>Already have an account? <Link to='/login' className='loginbtn'>Login</Link></p>
              {errorElement}
              <button disabled={!agree} className='btn btn-primary'>Registration</button>

            </Form>
          </div>
        </div>
      </div>
      <SocalLogin></SocalLogin>
    </div>
  );
};

export default SignUp;