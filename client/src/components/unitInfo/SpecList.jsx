import React from 'react';

import SpecItem from './SpecItem.jsx';

const SpecList = ({ unitData, ownerData }) => {
  let { issuperhost, name } = ownerData;
  let {
    partofunitfromrent,
    guestsallowed,
    numberofroomsguestsmayuse,
    numberofbedsguestsmayuse,
    numberofbathroomsguestsmayuse,
  } = unitData;

  return(
    <div>
      <SpecItem
        name={name} 
        part={partofunitfromrent}
        guests={guestsallowed}
        rooms={numberofroomsguestsmayuse}
        beds={numberofbedsguestsmayuse} 
        baths={numberofbathroomsguestsmayuse}
        superH={issuperhost}
      />
    </div>
  );
};

export default SpecList;