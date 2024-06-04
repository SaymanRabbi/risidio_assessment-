import React from 'react';
import { useUserStore } from '../../Store/UserStore';
import { FaRegCopy } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from '../Button/Button';


const WalletCard = () => {
    const {wallet,userInfo} = useUserStore((state) => state);
    return (
        <div className=' fixed z-[200] w-[492px] h-[981px] top-[12%] right-0 bg-[#D4D4D4]/10 rounded-[13px] shadow-lg'>
            <div className=' h-[100%] w-[459px] rounded-[13px] bg-white p-8 ml-auto border-[2px] border-[#02071D] overflow-y-scroll'>
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
               <div className=' mb-[96px]'>
                  <h2 className=' text-[400] text-[14px] leading-[20px] text-[#7B7B7B]'>
                  In your wallet
                  </h2>
                  <h1 className=' text-[600] text-[36px] text-[#02071D] leading-[60px]'>{userInfo?.balance} BTC</h1>
               </div>
               {/* ----nfts-- */}
               <div>
                <h2
                className=' font-[800] text-[24px] leading-[29px]'>Your NFTs</h2>
              </div>
               {
                wallet.length<=0?<div className=' mt-[104px] text-center'>
                   <h2 className=' font-[400] text-[24px] leading-[29px]'>You don’t own any NFTs yet</h2>
                   <div className=' mt-[73px] flex justify-center items-center'>
                    <Button className=' px-[80px] bg-[#23252B] text-white font-[600] text-[16px]'>
                    Shopping
                    </Button>
                   </div>

                </div> : <div
                 className=' mt-[18px]'
                >
                   {
                        wallet.map((nft, index) => (
                           
                                <div className='h-[227px] relative overflow-hidden w-[391px] rounded-[16px] mt-[18px]'  key={index}>
                                    <img src={
                                        nft?.image
                                    } alt="" 
                                    className=' w-[100%] h-[100%] rounded-[16px] object-cover '
                                    />
                                </div>
                        ))
                    
                   }
                </div>
               }
               {/* ----nfts-- */}
            </div>
        </div>
    );
};

export default WalletCard;