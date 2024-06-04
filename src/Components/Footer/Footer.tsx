import React from 'react';
import marketplace from '../../image/marketplace.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import path from 'path';
const Footer = () => {
    const route = useLocation().pathname.split('/')[1]
    console.log(route)
    return (
        <>
      {
        route  !== 'wallet' &&   <div
        className=' h-[98px]  bottom-0 w-[100%] bg-[#E6E9F2] px-[46px] py-[35px] flex items-center justify-between mt-[153px] z-[100]'
       >
           <div>
               <img src={marketplace} alt="marketplace" 
                className='w-[176px] h-[27px] cursor-pointer'
               />
           </div>
           <div className=' flex items-center text-[26px] text-[#23252B] gap-x-8 cursor-pointer'>
               <FaFacebookF/>
               <FaTwitter />
               <IoLogoDiscord />
               <FaInstagram />
           </div> 
       </div>
      }
        </>
    );
};

export default Footer;