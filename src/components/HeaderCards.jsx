import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const HeaderCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative w-60 h-36'>
        <div  className='absolute w-full h-full bg-black/50 hover:bg-black/60 rounded-xl text-white flex flex-col'>
        <p  className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2 text-xl'>Through 8/26</p>
        <button  className='border-white bg-white mx-2 w-fit absolute bottom-2 px-2 text-black rounded-lg hover:bg-gray-200 duration-200 flex justify-center items-center gap-2'>Order Now <AiOutlineArrowRight /> </button>
        </div>
        <img className='w-full h-full rounded-xl' src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
      </div>
    </div>
  )
}

export default HeaderCards
