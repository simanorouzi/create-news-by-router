import * as React from 'react';
import { ButtonType } from '../src/types';
import classes from './button.module.css';

const Button = (props: ButtonType) => {
  return (
    <button className={classes['default-button']} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
