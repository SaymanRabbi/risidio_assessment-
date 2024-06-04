import React from 'react';
import { useUserStore } from '../../Store/UserStore';
import { FaRegCopy } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const WalletCard = () => {
    const {wallet,userInfo} = useUserStore((state) => state);
    return (
        <div className=' absolute z-[200] w-[492px] h-[981px] top-[12%] right-0 bg-[#D4D4D4]/10 rounded-[13px] shadow-lg'>
            <div className=' h-[100%] w-[459px] rounded-[13px] bg-white p-8 ml-auto border-[2px] border-[#02071D]'>
               {/* top bar */}
               <div className=' flex items-center mb-[69px]'>
                   <div className=' flex items-center gap-x-3'>
                        <div className=' w-[50px] h-[50px] rounded-full bg-[#29627F]' ></div>
                        <div className=' flex items-center gap-x-4'>
                      <h2 className=' font-[400] text-[#02071D]'>
                      {
                        userInfo?.name
                      }
                      </h2>
                        <FaRegCopy className=' cursor-pointer text-[#02071D]' />
                   </div>
                   </div>

                     <div className=' ml-auto'>
                          <FaLongArrowAltRight className=' cursor-pointer text-[#02071D] font-[800] text-[30px]' />
                          </div>
                 
               </div>
               {/* top bar */}
               <div>
                  <h2 className=' text-[400] text-[14px] leading-[20px] text-[#7B7B7B]'>
                  In your wallet
                  </h2>
                  <h1 className=' text-[600] text-[36px] text-[#02071D] leading-[60px]'>0.129 BTC</h1>
               </div>
            </div>
        </div>
    );
};

export default WalletCard;