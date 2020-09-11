import React, { useEffect, useCallback } from 'react';
import ClearIcon from '@material-ui/icons/Clear';

import { useStateValue } from '../../store/Store';

import './FlashMessage.scss';

function FlashMessage() {
  const [{ flashMessage }, dispatch] = useStateValue();

  const handleOnClick = useCallback(() => {
    dispatch({ type: 'DELETE_MESSAGE' });
  }, [dispatch]);

  useEffect(() => {
    if (flashMessage.length > 0) {
      setTimeout(() => {
        handleOnClick();
      }, 3000); // 3 seconds is the css animation for the flash message
    }
  }, [flashMessage.length, handleOnClick]);

  return (
    <>
      {flashMessage.length > 0 ? (
        <div className='flashMessage'>
          {flashMessage}
          <ClearIcon className='flashMessage__close' onClick={handleOnClick} />
        </div>
      ) : null}
    </>
  );
}

export default FlashMessage;
