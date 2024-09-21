import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { ImMail4 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { ItemIconContactComponent } from "./ItemIconContactComponent";
import { FormContactComponent } from "./FormContactComponent";

export const ContactFormComponent = () => {
  return (
    <section className="mt-16 mb-16 xl:w-8/10 mx-auto 2xl:w-7/10" id="contact">
      {/* Contenedor para toda la sección */}
      <div className="h-[48rem] xl:h-[34rem] xl:flex">
        {/* Contenedor para el texto */}
        <div className=" text-center flex flex-col xl:w-6/10 my-auto xl:text-start">
          <h1 className="text-3xl font-bold py-4 sm:text-4xl md:text-[3rem] lg:text-[3.2rem] xl:text-[4.5rem] xl:pl-5 xl:py-4 2xl:text-[6rem] 2xl:py-10">Contáctanos</h1>
          <p className="px-2 py-2 text-[1.1rem] sm:text-[1.2rem] sm:px-5 lg:text-[1.3rem] lg:px-7 xl:text-start xl:text-[1.8rem] xl:p-0 xl:pl-5 xl:py-6 xl:pr-10">
            Mantengámonos en contacto potenciamos equipos y empresas
            excepcionales. <br /> Escribenos, queremos conocer sobre tu empresa
            y tus proyectos.
          </p>

          {/* Contenedor para los íconos */}
          <div className=" flex flex-col">
            {/* CItem */}
            <ItemIconContactComponent
              icon={<IoLocationSharp />}
              text="70844 San Jerónimo Coatlán, Oaxaca"
            />

            <ItemIconContactComponent
              icon={<ImMail4 />}
              text="djl.juarez@sucrimsoft.com"
            />

            <ItemIconContactComponent
              icon={<IoLogoWhatsapp />}
              text="+52 951 23 29 382 / +52 951 31 01 543"
            />
          </div>
        </div>

        {/* Contenedor para el formulario */}
        <div className="xl:w-4/10 xl:flex flex-col justify-center mt-12 xl:mt-0">
          <FormContactComponent/>
        </div>
      </div>
    </section>
  );
};
