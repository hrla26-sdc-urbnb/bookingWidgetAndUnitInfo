import React from 'react';
import styles from '../styles/descriptions.css';

const AboutUnit = ({ about }) => {
  return(
    <div className="aboutUnit">
      <div className={styles.title}>The Space</div>
      <div className={styles.text}>{about}</div>
    </div>
  );
};

export default AboutUnit;