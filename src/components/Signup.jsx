import React, {useState} from 'react'
import {useDispatch} from  'react-redux'
import { signUp } from '../actions/authActions';
import Nav from './Nav'

const Signup = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [signupMessage, setSignupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSignup = async(e) =>{
    e.preventDefault();
    try {
      const response = await signUp(formData);
      setSignupMessage(response.message);
      setFormData({
        email:'',
        username:'',
        password:'',
      }) 
    } catch (error) {
      setSignupMessage(error.message);
    }
  }

  return (
    <>
    <Nav />
    <div className='duple-user'>
    <h1>Sign Up</h1>
    {signupMessage && <p className='message'>{signupMessage}</p>}
    <form className='duple-form' onSubmit={handleSignup}>
        <div>
            <label>Username</label>
            <input type='text' name='username' value={formData.username} placeholder='User Name' onChange={handleChange} required/>
        </div>
        <div>
            <label>Email</label>
            <input type='email' name='email' value={formData.email} placeholder='Email' onChange={handleChange} required/>
        </div>
        <div>
            <label>Password</label>
            <input type='password' name='password' value={formData.password} placeholder='Password' onChange={handleChange} required/>
        </div>
        <div>
            <button type='submit' className='duple-btn'>Sign up</button>
        </div>
    </form>
    </div>
    </>
  )
}

export default Signup
