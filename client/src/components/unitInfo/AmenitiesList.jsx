import React from 'react';
import AmenityItem from './AmenityItem.jsx';
import styles from '../styles/amenities.css';


const AmenitiesList = ({ unitData, toggleShowAllAmens }) => {

  const handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
    toggleShowAllAmens();
  };

  let amens = [];
  let all = [];
  for (let key in unitData) {
    if (typeof unitData[key] === 'boolean' && key != 'isbooked') {
      if (unitData[key]) {
        all.push(key);
      }
    }
  }
  let show = <a href="" onClick={handleClick}>{`Show all ${all.length} amenities`}</a>
  if (all.length === 0) {
    show = null;
  }
  if (unitData.hasparking) {
    amens.push('Free parking on premises');
  }
  if (unitData.hashottub) {
    amens.push('Hot tub');
  }
  if (unitData.haswifi) {
    amens.push('Wifi');
  }
  if (unitData.haskitchen) {
    amens.push('Kitchen');
  }

  console.log('amens: ', amens);
  return (
    <div className={styles.amenContainer}>
      <div className={styles.itemContainer}>
        {amens.map((amen, index) => {
          return <AmenityItem key={index} amen={amen}/>
        })}
      </div>
      <div className={styles.showAll}>
          {show}
      </div>
    </div>
  );
};

export default AmenitiesList;
