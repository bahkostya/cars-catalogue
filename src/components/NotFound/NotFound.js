import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

import styles from './NotFound.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <img src={logo} className={styles.logo} alt="Outa1" />
    <h1 className={styles.heading}>404 - Not Found</h1>
    <p className={styles.text}>
      Sorry, the page you are looking for does not exist.
    </p>
    <p className={styles.text}>
      You can always go back to the{' '}
      <Link className={styles.link} to="/">
        homepage
      </Link>
      .
    </p>
  </div>
);

export default NotFound;
