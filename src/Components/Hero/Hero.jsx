import React from 'react';
import Category from '../Data/Category';
import './Hero.css';

const Hero = () => {
  return (
    <div className="HeroBody">
      <div className="heroText">
      <h2 className='CategoryText'>Category</h2>
      </div>
     <div className="CardHolder">
     {/* {
        Category.map((item) => (
             <div key={item.id} className="Card">
            <img src={item.img} alt={item.name} />
            <p>{item.category}</p> 
          </div>
        ))
      } */}
     </div>
    </div>
  );
};

export default Hero;
