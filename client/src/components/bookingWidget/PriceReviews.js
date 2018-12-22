import React from 'react';

const PriceReviews = ({ unitData }) => {
  let { averageStarRating } = unitData;
  let stars = '';
  for (let i = 0; i < averageStarRating; i += 1) {
    stars += '*';
  }
  return(
      <div>
        <div>
          <span className="price">{`$${unitData.pricePerNight} `}</span>
          <span>per night</span>
        </div>
        <div>{stars}</div>
      </div>
  );
};

export default PriceReviews;