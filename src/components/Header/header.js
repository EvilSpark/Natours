import React from 'react';
import '../../assests/base/main.scss';
import Logo from  '../../img/logo-white.png';
import Button from '../button/button';
// import '../../assests/base/_basic.scss';
// import '../../assests/css/header.scss';

const Header =() => {
  return(
      <header className='header'>
        <div className='header__logo-box'>
          <img src={Logo} alt='logo' className='header__logo' />
        </div>
        <div className='header__text-box'>
          <h1 className='heading-primary'>
            <span className='heading-primary--main'>Outdoors</span>
            <span className='heading-primary--sub'>is where life happens</span>
          </h1>
          <Button />
        </div>
      </header>

  );
}

export default Header;