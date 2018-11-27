import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.png';

import styles from './Header.module.scss';
import { history } from '../../utils/router';

const Logo = () =>
  history.location.pathname !== '/' ? (
    <Link to="">
      <img src={logo} className={styles.logo} alt="Auto1" />
    </Link>
  ) : (
    <img src={logo} className={styles.logo} alt="Auto1" />
  );

const Header = () => (
  <header className={styles.container}>
    <Logo />
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link to="/Purchase" className={styles.link}>
            Purchase
          </Link>
        </li>
        <li>
          <Link to="/Orders" className={styles.link}>
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/Sell" className={styles.link}>
            Sell
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
