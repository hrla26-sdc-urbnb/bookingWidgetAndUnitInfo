import React from 'react';
import styles from '../styles/descriptions.css';

const GuestAccess = ({ access }) => {
  return(
    <div className="access">
      <div className={styles.title}>Guest Access</div>
      <div className={styles.text}>{access}</div>
    </div>
  );
};

export default GuestAccess;