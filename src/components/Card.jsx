import React from "react";
import cardImg from '../assets/vector1.png';

const Card = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 p-10'>

      {/* In-Progress */}
      <div className="relative bg-gradient-to-r from-[#422AD5] to-[#7e2fa0] rounded-md flex items-center justify-between">
        
    {/* Left Image */}
    <img src={cardImg} alt="" className="h-60 w-60" />

    {/* Center content */}
    <div className="text-white text-center flex-1">
      <h1 className='text-xl'>In-Progress</h1>
      <h1 className='text-2xl font-bold'>{inProgressCount}</h1>
    </div>

    {/* Right Image */}
    <img src={cardImg} alt="" className="h-60 w-60 rotate-180 rotate-x-180" />
  </div>


      {/* Resolved */}
      <div className="relative bg-gradient-to-r from-green-300 to-[#02aea2] rounded-md flex items-center justify-between">
        
    {/* Left Image */}
    <img src={cardImg} alt="" className="h-60 w-60" />

    {/* Center content */}
    <div className="text-white text-center flex-1">
      <h1 className='text-xl'>In-Progress</h1>
      <h1 className='text-2xl font-bold'>{resolvedCount}</h1>
    </div>

    {/* Right Image */}
    <img src={cardImg} alt="" className="h-60 w-60 rotate-180 rotate-x-180" />
  </div>
    </div>
  );
};

export default Card;
