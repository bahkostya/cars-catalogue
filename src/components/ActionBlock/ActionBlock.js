import React from 'react';

import Button from '../Button/Button';

import styles from './ActionBlock.module.scss';

const ActionBlock = ({ children, onClick, buttonLabel, ...props }) => (
  <div className={styles.container} {...props}>
    {children}
    <div className={styles.button}>
      <Button onClick={onClick}>{buttonLabel}</Button>
    </div>
  </div>
);

export default ActionBlock;
