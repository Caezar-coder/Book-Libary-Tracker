import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../Data/Images/bookCover-removebg-preview.png';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, state = {}) => {
    navigate(path, { state });
  };


  return (
    <div className="HeaderBody">
      <div className="headerWrapper">
        <div className="logo">
          <img src={logo} alt="Logo" className="imgLogo" />
        </div>
        <div className="center">
          <p onClick={() => handleNavigation('./Home', { category: 'All Categories' })}>
            Book Libary
          </p>
          <p>Details</p>
          <p>About Us</p>
        </div>
        <div className="search">
           <div className="profile">
            <img src="/src/Components/Data/Images/bookCover-removebg-preview.png" alt="" className='profileimg'/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
