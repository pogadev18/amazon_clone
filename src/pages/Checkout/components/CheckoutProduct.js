import React from 'react';

import { useStateValue } from '../../../store/Store';
import Button from '../../../sharedComponents/Button/Button';

import './CheckoutProduct.scss';

function CheckoutProduct({ id, imageUrl, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    });
  };

  return (
    <section className='checkoutProduct'>
      <img className='checkoutProduct__image' src={imageUrl} alt='Product' />

      <section className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <section className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role='img' aria-label='Star'>
                ⭐
              </span>
            ))}
        </section>
        <Button
          onClick={removeFromBasket}
          className='checkoutProduct__button'
          type='button'
          text='Remove from basket'
        />
      </section>
    </section>
  );
}

export default CheckoutProduct;
