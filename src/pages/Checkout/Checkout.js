import React from 'react';

import Subtotal from './components/Subtotal';

import './Checkout.scss';

function Checkout() {
  return (
    <section className='checkout'>
      <section className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='Ad Banner'
          className='checkout__ad'
        />

        <section>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </section>
      </section>

      <section className='checkout__right'>
        <Subtotal />
      </section>
    </section>
  );
}

export default Checkout;
