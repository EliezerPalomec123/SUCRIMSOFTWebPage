import React from 'react'
import { CorrouselMoreUsComponent } from './CorrouselMoreUsComponent'

export const MoreUsComponent = () => {
  return (
    <section className='mt-20'>
      {/* Contenedor para toda la sección */}
      <div className='bg-gradient-to-b from-blue-bg to-blue-light h-[40rem] w-full flex items-center  flex-col '>
        <h1 className='text-2xl text-white py-12 font-bold sm:text-3xl md:text-4xl'>Más sobre nosotros</h1>
        <CorrouselMoreUsComponent/>
      </div>
    </section>
  )
}
