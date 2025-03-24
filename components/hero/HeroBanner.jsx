import React from 'react'
import StarRating from '@/components/star/Star'

export default function HeroBanner() {
  return (
    <section className='w-full py-[60px] flex '>
      <div className='w-[40%] flex flex-col justify-between'>
        <h1 className='text-5xl font-bold text-[#050038]'>Take ideas from better to best</h1>
        <h4 className='text-[#050038B8]'>Miro is your team's visual platform to connect, collaborate, and create — together.</h4>
        <form className='flex flex-col gap-2.5'>
          <input type="text" placeholder='Enter your work email' className='w-full px-6 py-3 rounded-full text-[#5F5C80] text-lg outline-none border border-[#9B99AF]'/>
          <button className='w-full bg-[#4262FF] hover:bg-[#4262ffd2] px-6 py-3 rounded-full text-white cursor-pointer'>Sign up free →</button>
        </form>
        <div>
          <div>
            {/* <StarRating /> */}
            <p>Based on 5149+ reviews:</p>
          </div>
          <img src="/bannerLogos.png" alt="miro bannerLogos" />
        </div>
      </div>
      <img src="/headerimage.png" alt="header image" />
    </section>
  )
}
