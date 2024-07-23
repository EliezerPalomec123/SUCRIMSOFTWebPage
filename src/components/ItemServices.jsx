import React from "react";

export const ItemServices = ( { image,title,text } ) => {
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <img className="h-full w-full object-cover" src = { image } alt="" />
      <div className="absolute text-white inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-[1.5rem] sm:text-[1.7rem] md:text-[1.5rem] font-bold py-4 text-center px-2"> { title } </h1>
        <p className="text-center text-[18px] sm:text-[20px] md:text-[18px] px-7">{ text }</p>
      </div>
    </>
  );
};
