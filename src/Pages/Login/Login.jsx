import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handlePass = () => {
    const { emailOrPhone, password } = formData;


    if (!emailOrPhone || !password) {
      setError('Both fields are required');
      return;
    }

  
    const isEmail = /\S+@\S+\.\S+/.test(emailOrPhone);
    const isPhone = /^\d{10}$/.test(emailOrPhone); 
    if (!isEmail && !isPhone) {
      setError('Enter a valid email or phone number');
      return;
    }

    
    setError('');
    setTimeout(() => {
      navigate('/Landing-page');  
    }, 2000);
  };

  
  const handleOpenAcct = () => {
    navigate('/SignUp');
  };

  return (
    <div className="LoginBody">
      {error && <p className="error">{error}</p>}
      <div className="phoneNumberHolder">
        <h4>Phone Number or Email</h4>
        <input
          type="text"
          placeholder="Enter phone number or email"
          className="phoneNumber"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
        />
      </div>
      <div className="passwordHolder">
        <h4>Password</h4>
        <input
          type="password"
          placeholder="Enter your password"
          className="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="forgotPass">
        <p style={{color: 'black'}}>Forgot Password?</p>
        <p className="clickHere">Click here</p>
      </div>
      <div className="OpenAcct">
        <p onClick={handleOpenAcct} style={{color: 'black'}}>Don't have an account?</p>
      </div>
      <button onClick={handlePass} className="LoginButton">
        Login
      </button>
    </div>
  );
};

export default Login;
