import React from 'react';
import Star from './Star.jsx';
import styles from '../styles/priceReviews.css';

const PriceReviews = ({ unitData, price }) => {
  let { averageStarRating, numberOfReviews } = unitData;
  let num = <span className={styles.numReviews}>{numberOfReviews}</span>
  let stars = [];
  for (let i = 0; i < averageStarRating; i += 1) {
    // stars += '*';
    stars.push(<Star key={i}/>);
  }
  if (stars.length === 0) {
    num = null;
  }
  return(
      <div>
        <div className={styles.container}>
          <span className={styles.price}>{`$${price} `}</span>
          <span className={styles.perNight}>per night</span>
        </div>
        <div className={styles.stars}>
          {stars}
          {num}
        </div>
      </div>
  );
};

export default PriceReviews;