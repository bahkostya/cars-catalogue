import React from 'react';

import styles from './Button.module.scss';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className={styles.container}>
    {children}
  </button>
);

export default Button;
