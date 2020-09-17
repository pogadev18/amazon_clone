import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

import axios from '../../axios/axios';
import { db } from '../../firebase/firebase';

import Button from '../../sharedComponents/Button/Button';
import CheckoutProduct from '../Checkout/components/CheckoutProduct';
import { useStateValue } from '../../store/Store';
import { getBasketTotal } from '../../reducers/basketReducer';

import './Payment.scss';

// youtube video left at 3:28:26

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  // local states
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const history = useHistory();

  // stripe hooks
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    /* 
    - generate the special stripe secret which allows us to charge a customer
    - everytime the basket changes, we need to get a new secret 
    */
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // stripe API expects the total in a currencies subunits (dollars -> cents)
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = paymentConfirmation

        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET'
        });

        history.replace('/orders');
      });
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

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={value => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <Button
                  className='payment__button'
                  isDisabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </Button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Payment;
