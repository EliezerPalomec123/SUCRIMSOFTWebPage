import React from 'react'
import { ItemUsComponent } from './ItemUsComponent'
import { FaLaptopCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { BsFillPuzzleFill } from "react-icons/bs";




export const UsComponent = () => {
  return (
    <section className='mt-8 xl:hidden'>
      {/* Contenedor para toda la sección */}
      <div>
        <h1 className='text-center text-blue-bg text-[24px] font-bold'>Nuestra Identidad</h1>
        <div className='lg:flex'>
          <ItemUsComponent
            icon={ FaLaptopCode }
            title="Misión"
            text="Contribuir y dotar a PyMES de herramientas y soluciones tecnológicas de software a la medida que logren impulsar su gestión empresarial."
          />
          <ItemUsComponent
            icon={ FaEye }
            title="Visión"
            text="Ser la empresa líder de consultoría de Software Innovadora y rentable, ofreciendo soluciones que destaquen y se adapten a las necesidades del cliente. Ofreciendo siempre las herramientas de software más actuales del mercado."
          />
          <ItemUsComponent
            icon={ BsFillPuzzleFill }
            title="Valores"
            text="Amamos lo que hacemos y creemos en el aprendizaje constante. Por ello ponemos en conjunto nuestras habilidades para lograr grandes resultados en un ambiente, colaborativo, de reconocimiento y respeto."
          />
        </div>
   
      </div>
    </section>
  )
}
