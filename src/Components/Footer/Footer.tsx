import React from 'react';
import marketplace from '../../image/marketplace.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div
         className=' h-[98px] bg-[#E6E9F2] px-[46px] py-[35px] flex items-center justify-between mt-[153px]'
        >
            <div>
                <img src={marketplace} alt="marketplace" 
                 className='w-[176px] h-[27px]'
                />
            </div>
            <div className=' flex items-center text-[26px] text-[#23252B] gap-x-8'>
                <FaFacebookF/>
                <FaTwitter />
                <IoLogoDiscord />
                <FaInstagram />
            </div> 
        </div>
    );
};

export default Footer;