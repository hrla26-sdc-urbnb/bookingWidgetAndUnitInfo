import React from 'react';
import AmenityItem from './AmenityItem';


const AmenitiesList = ({ unitData }) => {
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
  };

  let amens = [];
  let all = [];
  for (let key in unitData) {
    if (typeof unitData[key] === 'boolean' && key != 'isBooked') {
     if (unitData[key]) {
      all.push(key);
     }
    }
  }
  let show = <a href="" onClick={handleClick}>{`Show all ${all.length} amenities`}</a>
  if (all.length === 0) {
    show = null;
  }
  if (unitData.hasParking) {
    amens.push('Free parking on premises');
  }
  if (unitData.hasHotTub) {
    amens.push('Hot tub');
  }
  if (unitData.hasWifi) {
    amens.push('Wifi');
  }
  if (unitData.hasKitchen) {
    amens.push('Kitchen');
  }
  return (
    <div>
      {amens.map((amen, index) => {
        return <AmenityItem key={index} amen={amen}/>
      })}
      <div className="showAll container">
        {show}
      </div>
    </div>
  );
};

export default AmenitiesList;