import React from 'react';
import { WiDirectionRight } from "react-icons/wi";
import { IoIosCheckmark } from "react-icons/io";
import './Body.css';

const Body = () => {
  return (
    <div className="Body">
      <div className="myBookWrapper">
        <div className="text">
          <h2>My Books</h2>
          {/* <WiDirectionRight className="Direction" /> */}
        </div>

        <div className="MyBookHolder">
          <div className="book">
            <img src="/src/assets/Images/haryPorter.jpeg" alt="Harry Potter" />
            <div className="Action">
              <IoIosCheckmark className="CheckIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
