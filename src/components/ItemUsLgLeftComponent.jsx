import React from "react";
import { CircleTitleUsLgComponent } from "./CircleTitleUsLgComponent";
import { CircleTitleUsLgLeftComponent } from "./CircleTitleUsLgLeftComponent";

export const ItemUsLgLeftComponent = ( {image, letter, restText, description} ) => {
  return (
    <div className=" h-[20rem] flex relative 2xl:h-[28rem]">

       <div className='absolute right-1/4 top-2'>
        <CircleTitleUsLgLeftComponent
          letter = { letter }
          restText = { restText }
        />
      </div>

      {/* Contenedor para el texto */}
      <div className="h-9/10 w-7/10 flex flex-col items-center justify-center">
        <p className="text-[22px] px-4 2xl:text-[28px] 2xl:pl-10 pt-5"> { description } </p>
      </div>

      {/* Contenedor para la imagen */}
      <div className=" h-9/10 w-3/10 rounded-xl overflow-hidden px-4">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={ image }
          alt="Imagen de la misión"
        />
      </div>
    </div>
  );
};
