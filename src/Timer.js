import React from 'react';
import Button from './Button.js';

const Timer = () => {
  return (
    <div>
       <div className="h-screen w-full flex justify-center items-center bg-tokyo bg-cover bg-center relative">
         <div className="text-8xl lg:text-9xl text-white">25:00</div>
         <svg viewBox="0 0 100 100" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-3/5 lg:h-3/4">
           <circle r="30" cx="50%" cy="50%" className="stroke-white fill-none stroke-1"></circle>
         </svg>
       </div>
       <div className="absolute bottom-28 lg:bottom-24 left-1/2 -translate-x-1/2 text-white text-2xl flex gap-4 items-center">
         <Button text="Start" />
         <Button text="Reset" />
         <i class="big cog icon"></i>
       </div>
    </div>
  );
};

export default Timer;
