import React from 'react';

import './Button.scss';

function Button({ text, type, className }) {
  return (
    <button className={`${className} button`} type={type}>
      {text}
    </button>
  );
}

export default Button;
