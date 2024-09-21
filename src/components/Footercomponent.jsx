import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const Footercomponent = () => {
  return (
    <div>
      <footer className="bg-blue-bg text-white">
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap justify-around">
          {/* Logo de la empresa */}
          <div className="w-full md:w-1/3 lg:w-1/4 text-center flex justify-center items-center p-3">
            <p className="text-2xl font-bold">SUCRIMSOFT</p>
          </div>

          {/* Soluciones */}
          <div className="w-full md:w-1/3 lg:w-1/4 text-center p-3">
            <p className="text-xl mb-3">Soluciones</p>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">App Desarrollo</a>
            </div>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">App Marketing</a>
            </div>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">IOS Desarrollo</a>
            </div>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">Android Desarrollo</a>
            </div>
          </div>

          {/* Compañia */}
          <div className="w-full md:w-1/3 lg:w-1/4 text-center p-3">
            <p className="text-xl mb-3">Link</p>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">Acerca de</a>
            </div>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">Trabajos</a>
            </div>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">Procesos</a>
            </div>
            <div className="mb-1">
              <a className="text-white text-decoration-none" href="#">Servicios</a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="w-full md:w-1/3 lg:w-1/4 text-center p-3">
            <p className="text-xl mb-3">Redes Sociales</p>
            <div className="mb-2 flex justify-center items-center">
              <FaFacebook className='text-[1.4rem] font-bold'/>
              <a className="text-white text-decoration-none ml-2" href="https://www.facebook.com/profile.php?id=61550870477638">Facebook</a>
            </div>

            <div className="mb-2 flex justify-center items-center">
              <FaInstagram className='text-[1.4rem] font-bold'/>
              <a className="text-white text-decoration-none ml-2" href="#">Instagram</a>
            </div>

            <div className="mb-2 flex justify-center items-center">
              <FaLinkedin className='text-[1.4rem] font-bold'/>
              <a className="text-white text-decoration-none ml-2" href="https://www.linkedin.com/company/sucrimsoft/people/?facetGeoRegion=103323778">Linkedin</a>
            </div>

            <div className="mb-2 flex justify-center items-center">
              <FaTwitter className='text-[1.4rem] font-bold'/>
              <a className="text-white text-decoration-none ml-2" href="#">Twitter</a>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
