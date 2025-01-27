import React from 'react'
import { IoMenu, IoSearch } from "react-icons/io5";
import './Header.css'

const Header = () => {
  return (
    <div className='HeaderBody'>
     <div className="HeaderWrapper">
     <IoMenu style={{fontSize: '30px' , color: 'white'}}/>
      <p style={{fontSize: '30px', fontStyle: 'italic', fontWeight: 'bolder' , color: 'white'}}>My Book Store</p>
      <IoSearch style={{fontSize: '30px', color: 'white'}}/>
     </div>
    </div>
  )
}

export default Header
