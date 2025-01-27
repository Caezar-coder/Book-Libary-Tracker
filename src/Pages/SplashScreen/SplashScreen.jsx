import React from 'react'
import './SplashScreen.css'
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
    const navigate = useNavigate()

    const handleSignUpDirectory =()=>{
        navigate('SignUp')
    }
    const handleLoginDirectory =()=>{
        navigate('Login')
    }
  return (
    <div className='SplashScreenBody'>
      <div className="splitBody">
      <div className="imgContainer">
    <img src="/src/assets/Images/bookCover-removebg-preview.png" alt="" />
      </div>
      </div>
      <div className="Directrory">
        <h3>Your book library at the office</h3>
        <button onClick={handleLoginDirectory}>Login </button>
        <button onClick={handleSignUpDirectory}>SignUp </button>
      </div>
    </div>
  )
}

export default SplashScreen
