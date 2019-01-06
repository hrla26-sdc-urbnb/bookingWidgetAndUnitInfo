import React from 'react';
import ShowAmensListItem from './ShowAmensListItem.jsx';
import styles from '../styles/showAllAmens.css';

const ShowAmensList = ({
  basic,
  facilities,
  dining,
  bedAndBath,
  safetyFeatures,
  notIncluded,
  close,
}) => {
  let b;

  let f;

  let d;

  let bB;

  let sF;
 
  let nI;

  if (basic.length) {
    b = 'Basic';
  } else {
    b = null;
  }

  if (facilities.length) {
    f = 'Facilities';
  } else {
    f = null;
  }

  if (dining.length) {
    d = 'Dining';
  } else {
    d = null;
  }

  if (bedAndBath.length) {
    bB = 'Bed and bath';
  } else {
    bB = null;
  }

  if (safetyFeatures.length) {
    sF = 'Safety features';
  } else {
    sF = null;
  }

  if (notIncluded.length) {
    nI = 'Not included';
  } else {
    nI = null;
  }

  return (
    <div className={styles.childContainer}>
      <div onClick={() => { close() }} className={styles.x}>X</div>
      <div className={styles.mega}>Amenities</div>
      <div className={styles.itemContainer}>
        <div className={styles.title}>{b}</div>
        {basic.map((sent, index) => {
          return <ShowAmensListItem key={index} sent={sent} />;
        })}
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.title}>{f}</div>
        {facilities.map((sent, index) => {
          return <ShowAmensListItem key={index} sent={sent} />;
        })}
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.title}>{d}</div>
        {dining.map((sent, index) => {
          return <ShowAmensListItem key={index} sent={sent} />;
        })}
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.title}>{bB}</div>
        {bedAndBath.map((sent, index) => {
          return <ShowAmensListItem key={index} sent={sent} />;
        })}
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.title}>{sF}</div>
        {safetyFeatures.map((sent, index) => {
          return <ShowAmensListItem key={index} sent={sent} />;
        })}
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.title}>{nI}</div>
        {notIncluded.map((sent, index) => {
          return <ShowAmensListItem key={index} sent={sent} name="Not included" />;
        })}
      </div>
    </div>
  );
};

export default ShowAmensList;
