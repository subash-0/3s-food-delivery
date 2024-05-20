import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 rounded-t-lg cursor-pointer'>
      <div className='max-h-[500px] relative'>
       <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 hover:bg-black/70 rounded-t-lg duration-500 flex flex-col justify-center'>
       <h1 className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
        <h1 className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods </span>  Delivery Station</h1>
       </div>
        <img className='w-full max-h-[500px] object-cover rounded-t-lg' src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero
