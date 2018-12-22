import React from 'react';
import AmenityItem from './AmenityItem';


const AmenitiesList = ({ unitData }) => {
  let amens = [];
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
    </div>
  );
};

export default AmenitiesList;