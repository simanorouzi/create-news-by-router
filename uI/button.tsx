import * as React from 'react';
import { ButtonType } from '../src/types';
import classes from './button.module.css';

const Button = (props: ButtonType) => {
  return (
    <button
      className={`${classes['default-button']} ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
