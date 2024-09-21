import React from "react";
import { CircleTitleUsLgComponent } from "./CircleTitleUsLgComponent";

export const ItemUsLgRightComponent = ({
  image,
  letter,
  restText,
  description,
}) => {
  return (
    <div className=" h-[20rem] flex relative  2xl:h-[30rem]">
      <div className="absolute left-1/4 top-2">
        <CircleTitleUsLgComponent letter={letter} restText={restText} />
      </div>

      {/* Contenedor para la imagen */}
      <div className=" h-9/10 w-3/10 px-4">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={image}
          alt="Imagen de la misión"
        />
      </div>

      {/* Contenedor para el texto */}
      <div className="h-9/10 w-7/10 flex flex-col items-center justify-center">
        <p className="text-[22px] pl-11 2xl:text-[28px] font-sans"> {description} </p>
      </div>
    </div>
  );
};
