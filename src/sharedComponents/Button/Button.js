import React from 'react';

import './Button.scss';

function Button({ text, type, className, onClick }) {
  return (
    <button onClick={onClick} className={`${className} button`} type={type}>
      {text}
    </button>
  );
}

export default Button;
