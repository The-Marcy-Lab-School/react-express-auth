import React from 'react';
import logo from '../pages/assets/images/Union.png'; 

const Footer = () => {
  return (
    <div className="h-[200px] bg-red-300 text-lg">
      <div className="ml-5 mr-5 bg-white relative -top-2 p-8 h-full">
        <div className="-translate-y-3">
          <div className='flex flex-row'>
            <img className="rounded-sm mb-20 mt-8 ml-8" src={logo} alt="Smiley face" width="70" height="70" />
            <div className='grid grid-rows-2 gap-7 w-28 max-h-7 absolute right-0 mt-8 mr-28 gap-5 text-lg'>
              <p> Events </p>
              <p> Excersise </p>
              <p> About </p>
            </div>
          </div>
        </div>
        <div className='text-sm mb-2 left-9 bottom-0 absolute'>
          <p> A Marcy Lab School Project </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
