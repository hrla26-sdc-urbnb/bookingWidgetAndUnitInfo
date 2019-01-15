import React from 'react';
import styles from '../styles/ownerUnit.css';

const OwnerUnit = ({ unitData, ownerData }) => {
  let { partofunitfromrent, title, city } = unitData;
  let { name, photo, issuperhost } = ownerData;
  return (
    <div className={styles.unitOwner}>
      <div className="unitTitle container">
        <div className={styles.partAvailable}>{partofunitfromrent}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.city}>{city}</div>
      </div>

      <div className={styles.ownerContainer}>
        <div className={styles.picContainer}>
          <img className={styles.profilePic} src={photo} />
        </div>
          {/* <img src="s3://coffeegodddfec/superHostBadge.png"/> */}
        <div className={styles.ownerName}>{name}</div>
      </div>
    </div>
);};

export default OwnerUnit;
