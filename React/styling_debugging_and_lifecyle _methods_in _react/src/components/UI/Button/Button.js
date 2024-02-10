import React from 'react';

import './Button.css';

const Button = props => {
  
  return (
    <button type={props.type} className={`button ${props.isDisable ? '' : 'active'}`}  onClick={props.onClick} disabled={props.isDisalbe}>
      {props.children}
    </button>
  );
};

export default Button;
