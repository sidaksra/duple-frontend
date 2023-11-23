import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/authActions';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [signInMessage, setSignInMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn(formData, dispatch);
      setSignInMessage(response.message); 
      navigate('/home');
    } catch (error) {
      setSignInMessage(error.message);
    }
  };
  
  return (
    <>
    <Nav />
      <div className='duple-user'>
        <h1>Sign In</h1>
        {signInMessage && <p className='message'>{signInMessage}</p>}
        <form className='duple-form' onSubmit={handleSignIn}>
          <div>
            <label>Email</label>
            <input type='email' name='email' value={formData.email} placeholder='Email' onChange={handleChange} required/>
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' value={formData.password} placeholder='Password' onChange={handleChange} required/>
          </div>
          <div>
            <button type='submit' className='duple-btn'>Sign In</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signin;
