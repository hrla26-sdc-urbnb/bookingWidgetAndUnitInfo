import React from 'react';
import Star from './Star';
import styles from '../styles/priceReviews.css';

const PriceReviews = ({ unitData, price }) => {
  let { averageStarRating } = unitData;
  // let stars = '';
  let stars = [];
  for (let i = 0; i < averageStarRating; i += 1) {
    // stars += '*';
    stars.push(<Star />);
  }
  return(
      <div>
        <div className={styles.container}>
          <span className={styles.price}>{`$${price} `}</span>
          <span className={styles.perNight}>per night</span>
        </div>
        <div className={styles.stars}>{stars}</div>
      </div>
  );
};

export default PriceReviews;