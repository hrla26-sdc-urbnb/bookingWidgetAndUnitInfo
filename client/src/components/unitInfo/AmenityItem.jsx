import React from 'react';
import styles from '../styles/amenities.css';

const AmenityItem = ({ amen }) => {
  const amenMap = {
    'Free parking on premises': 'https://s3.amazonaws.com/coffeegodddfec1/Screen+Shot+2019-01-02+at+9.44.42+AM.png',
    Kitchen: 'https://s3.amazonaws.com/coffeegodddfec1/Screen+Shot+2019-01-02+at+9.44.55+AM.png',
    Wifi: 'https://s3.amazonaws.com/coffeegodddfec1/Screen+Shot+2019-01-02+at+9.45.09+AM.png',
    'Hot tub': 'https://s3.amazonaws.com/coffeegodddfec1/Screen+Shot+2019-01-02+at+9.46.45+AM.png',
  };
  return (
    <div className={styles.item}>
      <div>
        <img className={styles.amenIcon} src={amenMap[amen]} alt="" />
      </div>
      <div>{amen}</div>
    </div>
  );
};

export default AmenityItem;
