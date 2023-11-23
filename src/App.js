import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import Home from './components/Home.jsx';
import { Provider } from 'react-redux';
import store from './store';
import './styles/main.css'



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
