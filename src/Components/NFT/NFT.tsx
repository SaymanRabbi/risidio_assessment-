import React from 'react';
import Container from '../Container/Container';
import nft1 from '../../image/collection1.png';
import nft2 from '../../image/hero.png';
import nft3 from '../../image/nft1.png';
import nft4 from '../../image/nft2.png';
import nft5 from '../../image/nft3.png';
import nft6 from '../../image/nft4.png';
import Button from '../Button/Button';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useUserStore } from '../../Store/UserStore';
import toast from 'react-hot-toast';

interface NFTProps {
    title: string;
    background: string;
   button?:boolean
}
const data = [
     {
        title: 'Night is coming',
        background: nft1,
     },{
        title:'With the stars',
        background: nft2,
        button:true
     },{
        title:'Summer',
        background: nft3,
        
     },{
        title:'Quiet',
        background: nft4,
     },{
        title:'Travel',
        background: nft5,
     },{
        title:'The rain',
        background: nft6,
     }
]

const NFT = () => {
   const {addToWallet,calculateBalance} = useUserStore((state) => state);
   const AddToCart = (img:any) => {
         addToWallet(.12, img)
         toast.success('NFT added to wallet successfully!')
         calculateBalance();
   }
    return (
       <Container
        className='px-[80px] mt-[140px]'
       >
         <div>
             <h2 className=' font-[800] text-[24px] leading-[29px]'>NFTs</h2>
        </div>
        {/* ---card-- */}
        <div className=' grid md:grid-cols-3 gap-8 mt-[54px] grid-cols-1'>
             {
                    data.map((nft, index) => (
                        <div className=' h-[498px] rounded-[47px] bg-[#FAFAFA] p-[16px] shadow-md cursor-pointer hover:shadow-lg'
                        key={index}
                        onClick={() => AddToCart(nft.background)}
                        >
                            <div className='h-[345px] relative overflow-hidden'>
                                <img src={
                                    nft?.background
                                } alt="" 
                                className=' w-[100%] h-[100%] rounded-[47px] object-cover '
                                />
                                {
                             nft?.button &&  <div className=' absolute w-[100%] h-[100%] flex justify-center items-center top-[0%] bg-black/30 rounded-[47px]'>
                                <Button
                                 className=' bg-white border-white font-[600] text-[16px] leading-[19px] text-[#23252B] flex items-center gap-x-1 px-[80px]'
                                >
                                Buy
                                <FaLongArrowAltRight  />
                                </Button>
                             </div>
                           }
                            </div>
                            <div className=' pt-[45px] flex justify-between items-center'>
                                <h2 className=' font-[700] text-[24px] leading-[29px]'>
                                    {nft?.title}
                                </h2>
                                <button
                                 className=' px-[35px] py-[9px] rounded-[49px] bg-[#D4D3EB] text-[#23252B] font-[500] text-[12px]'
                                >
                                0.12 BTC
                                </button>
                            </div>
                        </div>
                    ))
             }
        </div>
        {/* ---card-- */}
       </Container>
    );
};

export default NFT;