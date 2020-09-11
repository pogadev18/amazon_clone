import React from 'react';
import CurrencyFormat from 'react-currency-format';

import Button from '../../../sharedComponents/Button/Button';

import './Subtotal.scss';

function Subtotal() {
  return (
    <section className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input className='subtotal__input' type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Button
        className='subtotal__button'
        type='button'
        text='Proceed to Checkout'
      />
    </section>
  );
}

export default Subtotal;
