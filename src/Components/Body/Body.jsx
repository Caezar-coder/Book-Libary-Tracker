import React from 'react';
import { WiDirectionRight } from "react-icons/wi";
import { IoIosCheckmark } from "react-icons/io";
import Card from '../card/Card';
import './Body.css';
import { useNavigate } from 'react-router-dom';

const Body = () => {
 
  return (
    <div className="Body">
      <div className="myBookWrapper">
        <div className="text">
          <h2>My Books</h2>
          {/* <WiDirectionRight className="Direction" /> */}
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Body;
