import React from 'react'
import video from '../assets/video/planeta.mp4'
import { TextBannerComponent } from './TextBannerComponent'

export const BannerComponent = () => {
  return (
    <section className='mb-20'>
      {/* Div que encierra a toda la sección */}
      <div className='relative w-full h-[35rem] overflow-hidden lg:h-screen'>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src = { video }
          autoPlay
          loop
          muted
        />
        <div className='absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[35rem] md:w-[40rem] lg:top-1/2 lg:left-1/4 lg:-translate-y-1/2 lg:-translate-x-1/4 lg:text-start '>
          <TextBannerComponent/>
        </div>
      </div>
    </section>
  )
}