import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => (
  <button type={props.type} className={styles.button}>
    {props.children}
  </button>
);

export default Button;
