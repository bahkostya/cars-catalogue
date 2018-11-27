import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ListItem.module.scss';

const ListItem = ({ imgSrc, title, description, id, isLoading }) => (
  <div className={isLoading ? styles.loader : styles.container}>
    {isLoading ? (
      <div className={styles.image} />
    ) : (
      <img src={imgSrc} className={styles.image} alt={title} />
    )}
    <div className={styles.content}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <Link to={`/details/${id}`} className={styles.viewMore}>
        View details
      </Link>
    </div>
  </div>
);

ListItem.defaultProps = {
  isLoading: false,
};

export default ListItem;
