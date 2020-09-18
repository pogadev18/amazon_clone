import React from 'react';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

import CheckoutProduct from '../../Checkout/components/CheckoutProduct';

import './Order.scss';

function Order({ order }) {
  return (
    <section className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>order id: {order.id}</small>
      </p>
      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={index}
          id={item.id}
          imageUrl={item.imageUrl}
          price={item.price}
          title={item.title}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={value => (
          <h3 className='order__total'>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </section>
  );
}

export default Order;
