import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
  });

  
  const [error, setError] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleSignUp = () => {
    const { firstName, lastName, emailOrPhone, password, confirmPassword } = formData;

    
    if (!firstName || !lastName || !emailOrPhone || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

   
    const isEmail = /\S+@\S+\.\S+/.test(emailOrPhone);
    const isPhone = /^\d{11}$/.test(emailOrPhone); 
    if (!isEmail && !isPhone) {
      setError('Please enter a valid email or phone number');
      return;
    }

    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    
    setError('');
    setTimeout(() => {
      navigate('/HomePage');
    }, 2000);
  };

  
  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div className="SignUpBody">
      <h4>Sign Up</h4>
      {error && <p className="error">{error}</p>}
      <div className="FirstNameHolder">
        <h4>First Name</h4>
        <input
          type="text"
          placeholder="Enter your first name"
          className="First-Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="LastNameHolder">
        <h4>Last Name</h4>
        <input
          type="text"
          placeholder="Enter your last name"
          className="LastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
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
      <div className="ConfirmPasswordHolder">
        <h4>Confirm Password</h4>
        <input
          type="password"
          placeholder="Confirm your password"
          className="ConfirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSignUp} className="SignUpButton">
        Sign Up
      </button>
      <div className="Login">
        <p onClick={handleLogin}>Already have an account?</p>
      </div>
    </div>
  );
};

export default SignUp;
