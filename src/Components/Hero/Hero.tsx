import React from 'react';
import userImg from '../../image/avatar.png';
import heroCover from '../../image/hero.png'
import Button from '../Button/Button';
import Container from '../Container/Container';
import Stricker from '../Stricker/Stricker';
import { Link } from 'react-router-dom';
interface HeroProps {
    children?: React.ReactNode;
    className?: string;
    subtitle: string;
    title: string;
    description: boolean;
    descriptionText?: string;
    button: boolean;
}

const Hero:React.FC<HeroProps> = ({
    children,
    className,
    subtitle,
    title,
    description,
    descriptionText,
    button,
}) => {
    return (
     <Container
        className='!px-[80px] pt-[54px]'
     >
        {
            button && <Stricker />
        }
         
           <div
         className={`bg-[#E6E9F2] rounded-[30px] pl-[87px] pr-[74px]  ${className} min-h-[518px] h-[100%] max-w-[99%] w-[100%] mx-auto`}
        >
            <div
             className='flex items-center justify-between w-[98%] mx-auto'
            >
                {/* ----left content---- */}
            <div className=' pt-[71px] pb-[64px]'>
                  {/* button */}
                    <button
                     className=' font-[500] text-[12px] rounded-[49px] py-[9px] px-[35px] text-textColor bg-[#FADFE4]'
                    >
                    Trending Now
                    </button>
                  {/* button */}
                  {/* -----subtitle--- */}
                  <div className=' mt-[37px]'>
                    <h2 className=' text-[24px] font-[400] leading-[29px] text-[#617587]'>
                    {subtitle}
                    </h2>
                  </div>
                  {/* -----subtitle--- */}
                    {/* -----title--- */}
                    <div>
                        <h1
                         className=' leading-[77px] font-[800] text-[64px]'
                        >
                        {title}
                        </h1>
                    </div>
                    {/* -----title--- */}
                    {/* -----description--- */}
                     {
                            description && (
                                <div className=' mt-[12px] md:max-w-[55%]'>
                                    <p className=' text-[16px] text-[#23252B] font-[400] leading-[36px]'>
                                    {descriptionText}
                                    </p>
                                </div>
                            )
                        
                     }
                    {/* -----description--- */}
                    <div className=' flex items-center mt-[29px] gap-[15px]'>
                            {/* ---img--- */}
                              <img src={userImg} alt="user" className=' w-[68px] h-[68px] rounded-full' />
                            {/* ---img--- */}
                            <div>
                                <p className=' text-[12px] leading-[14px] text-[#617587] font-[400]'>Artist</p>
                                <p className=' font-[400] text-[24px] text-[#23252B] leading-[29px]'>
                                Léa Jacquot
                                </p>
                            </div>
                    </div>
                    {/* ----button-- */}
                    {
                        button && (
                            <div className=' mt-[48px] flex gap-x-[15px]'>
                               <Button className=' bg-[#23252B] text-white !px-[100px]'>
                                 Buy 
                                 </Button>
                                <Link
                                 to={'/collection'}
                                >
                                <Button className=' bg-[#E6E9F2] text-[#23252B] !px-[70px]'>
                                 See collection
                                    </Button>
                                </Link>
                            </div>
                        )
                    }
                    {/* ----button-- */}
            </div>
            {/* -----left content----- */}

            {/* ----right content---- */}
            <div className=' pt-[ 47px] pb-[60px] max-w-[437px] w-[100%] max-h-[411px] h-[100%] rounded-[52px] overflow-hidden'>
                 <img src={heroCover} alt="Start" className=' w-[100%] h-[100%] rounded-[52px]' />
            </div>
            {/* ----right content---- */}
            </div>

            
        </div>
     </Container>
    );
};

export default Hero;