import { useState } from 'react'
import AvatarImage from './assets/avatar-image-business-card.png'
import HeroImage from './assets/hero-image-business-card.png'
import WhiteOverlay from './assets/white-overlay.svg'

function App() {

  return (
    <>
      <div className='w-[75%] md:w-[400px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] absolute flex flex-col rounded-b-xl  box-border z-10'>

        <div className='card-img relative'>
          <img src={HeroImage} alt="" className='w-full rounded-t-xl' />
          <img src={WhiteOverlay} alt="" className='absolute -bottom-1' />
        </div>

        <div className='card-body pt-1 px-7 bg-white'>
          <h1 className='text-[24px] font-medium text-title font-poppins tracking-tighter mb-3'>Perfect solution for small business</h1>
          <p className='text-paragraph text-md pr-3 mb-5 font-medium'>Small businesses need to generate leads to grow. You can use tools like Ringy.</p>
        </div>

        <hr />

        <div className='py-5 px-7 bg-white flex'>
          <img src={AvatarImage} className='w-[40px] rounded-full mr-4' alt="" />
          <div className='flex flex-col'>
            <p className='text-title font-semibold '>Amy Burgess</p>
            <span className='text-xs text-paragraph font-medium'>Customer Manger, Solution Oy</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
