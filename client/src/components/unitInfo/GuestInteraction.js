import React from 'react';
import styles from '../styles/descriptions.css';

const GuestInteraction = ({ interaction }) => {
  return (
    <div className="interaction">
      <div className={styles.title}>Interaction with Guests</div>
      <div className={styles.text}>{interaction}</div>
  </div>
  );
};

export default GuestInteraction;
