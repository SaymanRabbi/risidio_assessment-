import React from 'react';

const Stricker = () => {
    return (
        <div
         className='grid grid-cols-12 gap-4 w-[100%] h-[100%] mb-[15px] px-[23px]'
        >
      {Array(6).fill(0).map((_, index) => (
        <div
          key={index}
          className={`
          col-span-2  h-[14px] rounded-[7px] bg-[#E6E9F2]
           w-[100%]
          `}
        >
             <div className={`
               rounded-[7px] ${index  === 0 ? '!bg-[#23252B] w-[100%] h-[14px]' : index  === 1 ? 'bg-[#23252B] w-[25%] h-[14px]' : 'bg-[#E6E9F2] w-[100%]'}
             `}>

             </div>
        </div>
      ))}
    </div>
    );
};

export default Stricker;