import React from 'react';

import { useStateValue } from '../../store/Store';
import Button from '../Button/Button';

import './Product.scss';

function Product({ id, title, imageUrl, imageDesc, price, rating }) {
  const dispatch = useStateValue()[1];

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        imageUrl,
        price,
        rating
      }
    });
  };

  return (
    <article className='product'>
      <section className='product__info'>
        <h5>{title}</h5>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <section className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role='img' aria-label='Star'>
                ⭐
              </span>
            ))}
        </section>
      </section>
      <img src={imageUrl} alt={imageDesc} className='product__image' />
      <Button
        onClick={addToBasket}
        className='product__button'
        text='Add to basket'
        type='button'
      />
    </article>
  );
}

export default Product;
