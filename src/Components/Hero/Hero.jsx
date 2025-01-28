import React from 'react';
import Category from '../Data/Category';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleViewCategory = () => {
    navigate('/HomePage/Category');
  };

  return (
    <div className="HeroBody">
      <div className="heroText">
        <h2 className="CategoryText">Category</h2>
      </div>
     <div className="CardHolder">
     {
        Category.map((item) => (
             <div key={item.id} className="Card" onClick={handleViewCategory}>
            <img src={item.img} alt={item.name} />
            <p>{item.category}</p> 
          </div>
        ))
      }
     </div>
    </div>
  );
};

export default Hero;
