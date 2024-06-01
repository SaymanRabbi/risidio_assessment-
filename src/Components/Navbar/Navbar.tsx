import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <Container className=' py-[33px]'>
            {/* -----content----- */}
            <div className=' flex justify-between items-center'>
                  {/* -----logo */}
                  <div className=' text-[39px] font-bold text-textColor'>
                  <h2>
                  MARKETPLACE.
                  </h2>
                  </div>
                  {/* -----logo */}
                  {/* -----call to action */}
                  <div>
                    <Button className=' bg-white text-textColor'>
                    Connect Wallet
                    </Button>
                  </div>
                  {/* -----call to action */}
            </div>
            {/* -----content----- */}
            </Container>
    );
};

export default Navbar;