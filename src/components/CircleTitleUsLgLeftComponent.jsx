import React from "react";

export const CircleTitleUsLgLeftComponent = ({ letter, restText }) => {
  return (
    <div className="w-[14rem] h-[7rem] flex items-center text-[2.8rem] font-bold 2xl:w-[20rem] 2xl:h-[10rem] 2xl:text-[3.5rem] justify-end">
      <div>
        <span> {restText} </span>
      </div>

      <div className="rounded-full bg-blue-bg w-[110px] h-[110px] flex items-center text-white 2xl:w-[130px] 2xl:h-[130px]">
        <span> {letter} </span>
      </div>
    </div>
  );
};
