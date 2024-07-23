import React from 'react'

export const CircleTitleUsLgComponent = ( { letter, restText} ) => {
  return (
    <div className='w-[16rem] h-[7rem] flex items-center text-[2.8rem] font-bold 2xl:w-[20rem] 2xl:h-[10rem] 2xl:text-[3.5rem]'>
      {/* Contenedor para el círculo */}
      <div className='rounded-full bg-blue-bg w-[110px] h-[110px] flex items-center text-white justify-end 2xl:w-[130px] 2xl:h-[130px]'>
        <span> { letter } </span>
      </div>

      {/* Contenedor para el resto del texto */}
      <div>
        <span> { restText } </span>
      </div>
    </div>
  )
}
