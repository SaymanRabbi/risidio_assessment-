import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Container className='py-[33px] '>
            {/* -----content----- */}
            <div className=' flex justify-between items-center z-[100]'>
                  {/* -----logo */}
                  <div className=' text-[39px] font-bold text-textColor'>
                 <Link to='/'>
                 <h2>
                  MARKETPLACE.
                  </h2>
                 </Link>
                  </div>
                  {/* -----logo */}
                  {/* -----call to action */}
                  <Link to='/wallet'>
                    <Button className=' bg-white text-textColor font-[600]'>
                    Connect Wallet
                    </Button>
                  </Link>
                  {/* -----call to action */}
            </div>
            {/* -----content----- */}
            </Container>
    );
};

export default Navbar;