import React from 'react';
import styles from '../styles/descriptions.css';

const OtherNote = ({ notes }) => {
  return(
    <div className="otherNote">
      <div className={styles.title}>Other Things to Note</div>
      <div className={styles.text}>{notes}</div>
    </div>
  );
};

export default OtherNote;
