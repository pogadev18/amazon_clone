import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

import { useStateValue } from '../../store/Store';
import { auth } from '../../firebase/firebase';

import './Header.scss';

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='Amazon Logo'
        />
      </Link>
      <section className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </section>

      <ul className='header__nav'>
        <Link to={!user && '/login'}>
          <li onClick={handleAuth} className='header__option'>
            <span className='header__optionLineOne'>
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </li>
        </Link>

        <Link to='/orders'>
          <li className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </li>
        </Link>

        <li className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </li>

        <Link to='/checkout'>
          <li className='header__optionBasket'>
            <ShoppingBasketIcon className='header__basketIcon' />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
