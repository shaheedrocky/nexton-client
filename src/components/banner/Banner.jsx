import React from "react";
import { Hero_bg } from "../utils";

const Banner = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex flex-col justify-center h-full px-10">
        <p className="text-black text-xs font-poppins font-normal">
          Starting from $40.00
        </p>
        <h1 className="font-poppins text-xl lg:text-4xl mt-2 font-bold w-[70%]">
          Exclusive collection for everyone
        </h1>
      </div>
      <img className="w-full h-auto object-cover" src={Hero_bg} alt="hero-bg" />
    </div>
  );
};

export default Banner;
