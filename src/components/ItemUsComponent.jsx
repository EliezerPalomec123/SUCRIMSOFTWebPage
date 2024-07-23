import React from 'react';

export const ItemUsComponent = ({ icon: Icon, title, text }) => {
  return (
    <div className='flex flex-col items-center mb-4 p-2 md:p-9 md:mb-2 lg:flex-1 border-black '>
      <h2 className='text-2xl py-5 font-bold'>{title}</h2>
      <Icon className='text-blue-bg text-center text-[4rem] mb-5'/>
      <p className='text-center'>{text}</p>
    </div>
  )
}
