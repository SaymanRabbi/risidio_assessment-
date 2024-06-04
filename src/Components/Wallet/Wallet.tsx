import React from 'react';

const Wallet = () => {
    return (
        <div
         className='  bg-[#E6E9F2]  w-full flex justify-center items-center absolute top-0 left-0 z-[-1] h-[100vh]'
        >
            <div>
                 <h2
                  className=' text-[#000000] font-[800] text-[32px] leading-[38px] mb-[90px] text-center'
                 >Choose the wallet to connect</h2>
                 <div className=' flex gap-x-[63px]'>
                    <div className='w-[191px] h-[174px] rounded-[19px] bg-[#FAFAFA]'></div>
                    <div className='w-[191px] h-[174px] rounded-[19px] bg-[#FAFAFA]'></div>
                    <div className='w-[191px] h-[174px] rounded-[19px] bg-[#FAFAFA]'></div>
                 </div>
            </div>
        </div>
    );
};

export default Wallet;