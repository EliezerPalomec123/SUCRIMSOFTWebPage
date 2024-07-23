import React from "react";

export const ItemSwiperSlideComponent = ( { title,pngImage,text } ) => {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="h-full z-10 relative flex flex-col items-center">
        <h1 className="text-white text-[1.5rem] text-center mt-7 font-bold">
          { title }
        </h1>
        <img className=" w-[95px] py-5" src={ pngImage } alt="" />
        <p className="text-white text-center p-2 px-5 2xl:px-10 2xl:text-[1.1rem]">
          { text }
        </p>
      </div>
    </div>
  );
};
