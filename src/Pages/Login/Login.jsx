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
      navigate('/HomePage');
    }, 2000);
  };

  
  const handleOpenAcct = () => {
    navigate('/SignUp');
  };

  return (
    <div className="LoginBody">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <div className="PhoneNumberHolder">
        <h4>Phone Number or Email</h4>
        <input
          type="text"
          placeholder="Enter phone number or email"
          className="PhoneNumber"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
        />
      </div>
      <div className="PasswordHolder">
        <h4>Password</h4>
        <input
          type="password"
          placeholder="Enter your password"
          className="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="ForgotPass">
        <p>Forgot Password?</p>
        <p className="clickHere">Click here</p>
      </div>
      <div className="OpenAcct">
        <p onClick={handleOpenAcct}>Don't have an account?</p>
      </div>
      <button onClick={handlePass} className="LoginButton">
        Login
      </button>
    </div>
  );
};

export default Login;
