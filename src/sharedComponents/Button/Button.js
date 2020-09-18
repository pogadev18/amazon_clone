import React from 'react';

import './Button.scss';

function Button({ children, type, className, onClick, isDisabled }) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`${className} button`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
