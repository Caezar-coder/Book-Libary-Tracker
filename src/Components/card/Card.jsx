import React from 'react'
import './Card.css'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Card = () => {
  return (
    <div className='card'>
      <div className='imageHolder'>
    <img src="/src/assets/Images/haryPorter.jpeg" alt="" />
      </div>
      <div className='texts'>
    <p> J.K.Rowling</p>
    <p>Harry potter and the philosopher stone</p>
      </div>
      
   

      <div className='stars'>
      <FaStar color='gold'  size={20}/>
      <FaStar color='gold'  size={20}/>
      <FaStar color='gold'  size={20}/>
      <FaStar color='gold'  size={20}/>
      <FaStar color='gold'  size={20}/>
      <div className='addToFavorite'>
      <FaHeart color='red' />
      </div>
      </div>
    </div>
  )
}

export default Card
