import React from 'react'

const Card = () => {
  return (
    <>
    <div className='max-w-sm mx-auto my-4 bg-blue-300 shadow-lg rounded-lg mt-60 pl-3' >
        <h2 className='text-xl font-semibold text-gray-700 mb-2  pt-5'>Card Title</h2>
        <p className='text-blue-700'>This is a simple card using Tailwind Css</p>
        <button className='mt-4 px-4 bg-blue-500 rounded-lg hover:bg-violet-500 hover:text-white mb-4'>Click Me</button>
    </div>
    </>
  )
}
export default Card