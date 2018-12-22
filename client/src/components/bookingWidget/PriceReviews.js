import React from 'react';

const PriceReviews = ({ unitData, price }) => {
  let { averageStarRating } = unitData;
  let stars = '';
  for (let i = 0; i < averageStarRating; i += 1) {
    stars += '*';
  }
  return(
      <div>
        <div>
          <span className="price">{`$${price} `}</span>
          <span>per night</span>
        </div>
        <div>{stars}</div>
      </div>
  );
};

export default PriceReviews;