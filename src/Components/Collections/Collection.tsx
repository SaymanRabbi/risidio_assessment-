import React from 'react';
import Container from '../Container/Container';
import Background1 from '../../image/collection1.png';
import Background2 from '../../image/collection2.png';
import Background3 from '../../image/collection3.png';
import user from '../../image/avatar.png';
import Button from '../Button/Button';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface CollectionProps {
    title: string;
    button: boolean;
    userImg: string;
    userName: string;
    background: string;
}

const CollectionData:CollectionProps[] = [
     {
        title: 'Night Sky',
        button: true,
        userImg: user,
        userName: 'Léa Jacquot',
        background: Background1,
     },{
        title:'Future',
        button: false,
        userImg: user,
        userName: 'Julien',
        background: Background2,
     },{
        title:'Mother nature',
        button: false,
        userImg: user,
        userName: 'Maria',
        background: Background3,
     }
]
const Collection = () => {
    return (
        <Container className=' mt-[121px]'>
            <h2
             className=' mb-[41px] font-[800] text-[24px] leading-[29px] text-[#000000]'
            >
                Collections
            </h2>
          <div
           className=' grid grid-cols-1 md:grid-cols-3 gap-[40px]'
          >
          {
                CollectionData.map((collection, index) => (
                 <div
                  className=' h-[529px] rounded-[47px] bg-[#FAFAFA] p-[16px] shadow-lg'
                 >
                    <div className='h-[227px] relative overflow-hidden'>
                           <img src={
                                 collection?.background
                           } alt="" 
                            className=' w-[100%] h-[100%] rounded-[47px] '
                           />
                           {
                             collection?.button &&  <Link to='/collection' className=' absolute w-[100%] h-[100%] flex justify-center items-center top-[0%] bg-black/30 rounded-[47px]'>
                                <Button
                                 className=' bg-white border-white font-[600] text-[16px] leading-[19px] text-[#23252B] flex items-center gap-x-1'
                                >
                                Go to collection 
                                <FaLongArrowAltRight  />
                                </Button>
                             </Link>
                           }
                    </div>
                       {/* tittle and button */}
            <div className=' pt-[39px] flex items-center justify-between'>
                   <div >
                    <h2 className=' font-[700] text-[24px] leading-[29px]'>
                     {
                            collection?.title
                        
                     }
                    </h2>
                   </div>
                   {/* ---button */}
                   <div>
                  <button
                   className='bg-[#E1EDD9] rounded-[49px] py-[9px] px-[35px] text-[#23252B] text-[12px] font-[500] leading-[14px] cursor-pointer'
                  >
                  120 NTF
                  </button>
                   </div>
                   {/* ---button */}
            </div>
            {/* tittle and button */}
            {/* -----description */}
             <div className=' mt-[29px] font-[400] '>
               <p className='text-[14px] leading-[16px] text-[#617587]'>Price Range : 0.12BTC - 0.18BTC</p>
               <p
                className='text-[16px] leading-[24px] text-[#23252B]'
               >
               Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...
               </p>
             </div>
            {/* -----description */}
            {/* ---user */}
            <div className=' pt-[38px] flex gap-x-4 items-center'>
                <div className=' w-[40px] h-[40px] rounded-full'>
                    <img src={
                        collection?.userImg
                    } alt="user" className=' w-[100%] h-[100%] rounded-full' />
                </div>
                <div>
                    <p className=' text-[12px] leading-[14px] text-[#617587] font-[400]'>Artist</p>
                    <p className=' text-[16px] leading-[19px] text-[#23252B] font-[400]'>
                    {
                        collection?.userName
                    }
                    </p>
                </div>
            </div>
            {/* ---user */}
                 </div>
                ))
            }
         
          </div>
        </Container>
    );
};

export default Collection;