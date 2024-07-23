import React from "react";
import { ItemUsLgRightComponent } from "./ItemUsLgRightComponent";
import { CircleTitleUsLgComponent } from "./CircleTitleUsLgComponent";
import { ItemUsLgLeftComponent } from "./ItemUsLgLeftComponent";
import imageMision from "../assets/images/mision.jpg";
import imageVision from "../assets/images/vision.jpg";
import imageValores from "../assets/images/valores2.jpg";

export const UsLgComponent = () => {
  return (
    <section className="hidden xl:block">
      {/* Contenedor para la sección */}
      <div className=" w-[67rem] mx-auto 2xl:w-[80rem]">
        <ItemUsLgRightComponent
          image={imageMision}
          letter="M"
          restText="isión"
          description="Contribuir y dotar a PyMES de herramientas y soluciones tecnológicas de software a la medida que logren impulsar su gestión empresarial."
        />
        <ItemUsLgLeftComponent
          image={imageVision}
          letter="n"
          restText="Visió"
          description="Ser la empresa líder de consultoría de Software Innovadora y rentable, ofreciendo soluciones que destaquen y se adapten a las necesidades del cliente. Ofreciendo siempre las herramientas de software más actuales del mercado."
        />

        <ItemUsLgRightComponent
          image={imageValores}
          letter="V"
          restText="alores"
          description="Contribuir y dotar a PyMES de herramientas y soluciones tecnológicas de software a la medida que logren impulsar su gestión empresarial."
        />

      </div>
    </section>
  );
};
