import React from 'react'
import welcome from '../../assets/welcome.png'

const Hero = () => {
  return (
    <div>
      
        <img className='w-full sm:w-[100vw] md:h-screen object-cover sm:h-[50vh]' src={welcome} alt="" />
        <h1 className='bangers-regular absolute top-7 lg:text-8xl xl:text-9xl md:text-6xl sm:text-5xl text-3xl sm:left-40 left-10 lg:left-8 bg-primary-gradient bg-clip-text text-transparent text-3d'>
          WELCOME to alabay world</h1>
      
      <div className='absolute h-40 bg-black md:bottom-10 p-4 w-full'>
        <h2 className='bangers-regular text-white text-lg sm:text-2xl lg:text-4xl text-center'>where the 
          <span className='bg-primary-gradient bg-clip-text text-transparent'> legendary Central Asian Shepherd Dog </span>
          meets a new-age adventure.<br />
          <span className='bg-primary-gradient bg-clip-text text-transparent'> Join us</span> in celebrating the
          <span className='bg-primary-gradient bg-clip-text text-transparent'> strength, loyalty,</span> and
          <span className='bg-primary-gradient bg-clip-text text-transparent'> heritage</span> of the Alabay <br /> breed.</h2>
      </div>
    </div>
  )
}

export default Hero