import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RegisterLink } from './RegisterLink';
import { useSelector } from 'react-redux';
import '../styles.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            OneWay Apparel
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>   //Currently in Developement
                About
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                Cart ({state.length})
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links-mobile'  //Currently in Development
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li> */}
          </ul>
          {/* {button && (
            <RegisterLink buttonStyle='btn--outline'>Login</RegisterLink>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
