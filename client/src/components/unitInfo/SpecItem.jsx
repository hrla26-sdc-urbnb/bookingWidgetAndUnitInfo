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
  let icon = <img className={styles.houseIcon} src="https://s3.amazonaws.com/coffeegodddfec1/Screen+Shot+2019-01-02+at+9.45.45+AM.png" alt="" />
  let host = <div className="superHost">{`${name} is a Superhost`}</div>
  let hostDescription = <div>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
  if (!superH) {
    host = null;
    icon = null;
    hostDescription = null;
  }
  return (
    <div className={styles.items}>
      <div className={styles.partContainer}>
        <img className={styles.houseIcon} src="https://s3.amazonaws.com/coffeegodddfec1/Screen+Shot+2019-01-02+at+8.28.31+AM.png" alt=""/>
        <div className={styles.title}>{part}</div>
      </div>
      <div className={styles.text}>
        <ul>
          <li>{guests + ' guests'}</li>
          <li>{rooms + ' bedrooms'}</li>
          <li>{beds + ' beds'}</li>
          <li>{baths + ' baths'}</li>
        </ul>
      </div>
      <div className={styles.partContainer}>
        {icon}
        <div className={styles.title}>
        {host}
        </div>
      </div>
      <div className={styles.description}>
      {hostDescription}
      </div>
    </div>
  );
};

export default SpectItem;
