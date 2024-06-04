import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../Store/UserStore';
import WalletCard from '../WalletCard/WalletCard';

const Navbar = () => {
  const {walletConnected} = useUserStore((state) => state);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('walletConnected') === 'true'){
      console.log('wallet connected');
    }
  }, [walletConnected]);
    return (
        <Container className='py-[33px] '>
            {/* -----content----- */}
            <div className=' flex justify-between items-center z-[100]'>
                  {/* -----logo */}
                  <div className=' md:text-[39px] text-[30px] font-bold text-textColor'>
                 <Link to='/'>
                 <h2>
                  MARKETPLACE.
                  </h2>
                 </Link>
                  </div>
                  {/* -----logo */}
                  {/* -----call to action */}
                 {
                  walletConnected ?  <Button className=' bg-white text-textColor font-[600]'
                  onClick={() => setShow(!show)}
                  >
                  Account
                  </Button>: <Link to='/wallet'>
                  <Button className=' bg-white text-textColor font-[600]'>
                  Connect Wallet
                  </Button>
                </Link>
                 }
                  {/* -----call to action */}
            </div>
            {/* -----content----- */}
            {
              show && <WalletCard />
            }
            </Container>
    );
};

export default Navbar;