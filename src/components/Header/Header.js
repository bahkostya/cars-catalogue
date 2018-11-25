import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <img src={logo} className={styles.logo} alt="Auto1" />
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link to="/" className={styles.link}>
            Purchase
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.link}>
            Sell
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
