import React from 'react';
import './SocalLogin.css';
import google from '../../../img/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SocalLogin = () => {
  const navigate = useNavigate();
  //Sign In With Google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }
    
  return (
    <div>
    <div className='d-flex align-items-center'>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        <p className='mt-2 px-2'>or</p>
        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
    </div>
    {errorElement}
    <div className=''>
        <button
            onClick={() => signInWithGoogle()}
            className='btn btn-info w-25 d-block mx-auto my-2'>
            <img style={{ width: '30px' }} src={google} alt="" />
            <span className='px-2 text-white' style={{fontSize: '18px', fontWeight: '600'}}>Google Sign In</span>
        </button>
    </div>
</div>
  );
};

export default SocalLogin;