import React from 'react'
import Lottie from 'lottie-react'
import animationData from './Animation.json'
import { useNavigate } from 'react-router-dom'

const StaticPage = () => {
  const navigate = useNavigate();

  const handlebuttonclick = () => {
    navigate('/another-page') 
  }
  return (
    <div>
      <h1>Welcome to my Static Page</h1>
<Lottie animationData={animationData} style={{width:350,marginLeft:450}}/>

      <button onClick={handlebuttonclick} className='mt-96 right-10 px-24 py-4 bg-gradient-to-r from-lime-400 to-lime-500 font-semibold rounded-full text-white rounded hover:scale-125 transition-all duration-300 delay-400'>Submit</button>
    </div>
  )
}

export default StaticPage;
