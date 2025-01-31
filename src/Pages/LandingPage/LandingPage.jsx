import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate= useNavigate()

 const  handleViewCategory=()=>{
  navigate("./Home")
 }
  return (
    <div className='LandingageBody'>
      <div className="PageWrapper">
        <div className="text">
        <h1 className='title'>The original library <br />
        management system</h1>
        <p className='describe'>A library management system to support literacy, encourage independent learning, help drive
           parental engagement, and promote reading for <pleasure className="br">
           With its focus on promoting reading for pleasure across the school community, 
           Arinze's Cloud helps to develop strong readers with a passion for lifelong learning.</pleasure></p>
          <button className='view' onClick={handleViewCategory}>View Books</button>
        </div>
        <div className="image">
          <div className="imgCard">
          <img src="/public/Children-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
