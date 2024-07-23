import React from "react";

export const ItemIconContactComponent = ( {icon,text} ) => {
  return (
    <div className="flex-grow">
      <div className="h-full flex items-center justify-center mb-1 xl:justify-start">
        {/* Contenedor para el ícono */}
        <div className="w-1/10 h-[2rem] flex items-center justify-center text-[1.6rem]">
          { icon }
        </div>

        <div>
          <p className="px-2 font-bold lg:text-[1.1rem]"> { text } </p>
        </div>
      </div>
    </div>
  );
};
