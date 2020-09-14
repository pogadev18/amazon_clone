import React from 'react';
import FlipMove from 'react-flip-move';

import Subtotal from './components/Subtotal';
import CheckoutProduct from './components/CheckoutProduct';
import { useStateValue } from '../../store/Store';

import './Checkout.scss';

function Checkout() {
  const [{ basket }] = useStateValue();

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
          {basket.map((item, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={item.id}
                imageUrl={item.imageUrl}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            );
          })}
        </section>
      </section>

      <section className='checkout__right'>
        <Subtotal />
      </section>
    </section>
  );
}

export default Checkout;
