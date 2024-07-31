import React from "react";

export const ItemCarrouselTecComponent = ({ image }) => {
  return (
    <div>
      {/* Contenedor para la imagen */}
      <div className="w-[170px] h-[150px] overflow-hidden flex items-center sm:w-[160px] sm:h-[160px] xl:w-[200px] xl:h-[200px]">
        <img className="w-full h-full object-cover" src={image} alt=""/>
      </div>
    </div>
  );
};
