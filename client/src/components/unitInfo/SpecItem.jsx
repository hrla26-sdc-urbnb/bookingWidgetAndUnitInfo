import React from 'react';
import styles from '../styles/spec.css';

const SpectItem = ({ 
  part, 
  guests,
  rooms,
  beds,
  baths,
  superH,
  name,
}) => {
  let icon = <div className="emoji host">superhost emoji img</div>
  let host = <div className="superHost">{`${name} is a Superhost`}</div>
  let hostDescription = <div>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
  if (!superH) {
    host = null;
    icon = null;
    hostDescription = null;
  }
  return (
    <div className={styles.items}>
      {/* <div className="emoji part">part emoji img</div> */}
      <div className={styles.title}>{part}</div>
      <div className={styles.text}>
        <ul>
          <li>{guests + ' guests'}</li>
          <li>{rooms + ' bedrooms'}</li>
          <li>{beds + ' beds'}</li>
          <li>{baths + ' baths'}</li>
        </ul>
      </div>
      <div className={styles.title}>
      {/* {icon} */}
      {host}
      </div>
      <div className={styles.description}>
      {hostDescription}
      </div>
    </div>
  );
};

export default SpectItem;
