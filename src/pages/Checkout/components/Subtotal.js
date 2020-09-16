import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

import { useStateValue } from '../../../store/Store';
import { getBasketTotal } from '../../../reducers/basketReducer';
import Button from '../../../sharedComponents/Button/Button';

import './Subtotal.scss';

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  return (
    <section className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              {`Subtotal (${basket.length} items)`}: <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input className='subtotal__input' type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Button
        className='subtotal__button'
        type='button'
        text='Proceed to Checkout'
        onClick={e => history.push('/payment')}
      />
    </section>
  );
}

export default Subtotal;
