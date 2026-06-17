import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video pt-[35%] sm:pt-[30%] md:pt-[22%] lg:pt-[18%] px-4 sm:px-8 md:px-12 lg:px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:block py-3 lg:py-6 text-sm lg:text-lg w-full md:w-2/3 lg:w-1/3'>{overview}</p>



      <div className='flex flex-wrap gap-2 md:gap-4'>
        <button className='bg-white px-4 md:px-8 lg:px-12 text-sm md:text-lg lg:text-xl text-black py-2 md:py-4 rounded-lg hover:opacity-80'>▶️Play</button>
        <button className='bg-gray-800 px-4 md:px-8 lg:px-12 text-sm md:text-lg lg:text-xl text-white py-2 md:py-4 bg-opacity-50 rounded-lg'>More Info</button>
      </div>



    </div>
  )
}

export default VideoTitle