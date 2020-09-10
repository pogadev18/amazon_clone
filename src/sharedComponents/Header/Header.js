import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <img
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='Amazon Logo'
      />

      <section className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </section>

      <ul className='header__nav'>
        <li className='header__option'>
          <span className='header__optionLineOne'>Hello Guest</span>
          <span className='header__optionLineTwo'>Sign In</span>
        </li>

        <li className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </li>

        <li className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </li>

        <li className='header__optionBasket'>
          <ShoppingBasketIcon className='header__basketIcon' />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
