import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import CheckoutProduct from '../Checkout/components/CheckoutProduct';
import { useStateValue } from '../../store/Store';

import './Payment.scss';

function Payment() {
  const [{ basket, user }] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <section className='payment'>
      <section className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>

        <section className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </section>

        <section className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items &amp; Delivery</h3>
          </div>
          <div className='payment__items'>
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
          </div>
        </section>

        <section className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>

          <div className='payment__details'>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Payment;
