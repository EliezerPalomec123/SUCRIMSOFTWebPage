import React from 'react'
import { Link } from "react-scroll";

export const TextBannerComponent = () => {
  return (
    <>
      <h1 className='text-[30px] font-bold text-white py-4 md:text-[32px] lg:text-[38px]'>SUEÑA, IMAGINA, CREA</h1>
      <p className='text-[16px] text-Off-white md:text-[20px] lg:text-[26px] mb-5'>Somos una empresa mexicana que brinda servicios de diseño, desarrollo de software, marketing digital, comunicación, administración de software e integración de sistemas.</p>
      <button className='text-white text-[16px] bg-blue-bg w-[9rem] rounded-lg p-3 font-bold md:text-[20px] md:w-[12rem] hover:bg-[#1C2C6C]'>
      <Link
                  to="services"
                  smooth={true}
                  duration={2000}
                  offset={-80}
                  className="block py-2 px-3 text-white md:bg-transparent md:p-0 dark:text-white hover:cursor-pointer"
                  aria-current="page"
                >
                  Ver Más
                </Link>
      </button>
    </>
  )
}
