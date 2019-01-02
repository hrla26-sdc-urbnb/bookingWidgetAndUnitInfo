import React from 'react';
import styles from '../styles/amenities.css';

const AmenityItem = ({ amen }) => {
  return(
    <div className={styles.item}>
      {/* <div>amenity emoji</div> */}
      <div>{amen}</div>
    </div>
  );
};

export default AmenityItem;