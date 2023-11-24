import axios from 'axios';

export const signUp = async (formData) => {
  try {
    const response = await axios.post('https://duple-task-app.onrender.com/signup', formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error(error.response.data.error); 
    } else {
      throw new Error('Sign up failed. Please try again.'); 
    }
  }
};

export const signIn = async (formData, dispatch) => {
  try {
    const response = await axios.post('https://duple-task-app.onrender.com', formData);
    const user = {email: formData.email}
    dispatch({ type: 'SIGN_IN', payload: user });
    return response.data
    
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error(error.response.data.error); 
    } else {
      throw new Error('Sign in failed. Please try again.'); 
    }
  }
};