import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ListItem.module.scss';

const ListItem = ({ title, description }) => (
  <div className={styles.container}>
    <img
      src="https://pokemongohub.net/wp-content/uploads/2016/11/premier_ball_by_baconb0y-d5uft97.jpg"
      className={styles.image}
      alt={title}
    />
    <div className={styles.content}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <Link to="/" className={styles.viewMore}>
        View details
      </Link>
    </div>
  </div>
);

export default ListItem;
