import React from 'react';

import './Product.scss';

function Product() {
  return (
    <article className='product'>
      <section className='product__info'>
        <h5>The Lean Startup</h5>
        <p className='product__price'>
          <small>$</small>
          <strong>23.99</strong>
        </p>
        <section className='product__rating'>
          <span role='img' aria-label='Star'>
            ⭐
          </span>
        </section>
      </section>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        alt='The Lean Startup'
        className='product__image'
      />
      <button>Add to basket</button>
    </article>
  );
}

export default Product;
