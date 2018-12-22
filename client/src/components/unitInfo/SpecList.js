import React from 'react';

import SpecItem from './SpecItem';

const SpecList = ({ unitData, ownerData }) => {
  let { isSuperHost, name } = ownerData;
  let {
    partOfUnitFromRent,
    guestsAllowed,
    numberOfRoomsGuestsMayUse,
    numberOfBedsGuestsMayUse,
    numberOfBathroomsGuestsMayUse,
  } = unitData;

  return(
    <div>
      <SpecItem
        name={name} 
        part={partOfUnitFromRent}
        guests={guestsAllowed}
        rooms={numberOfRoomsGuestsMayUse}
        beds={numberOfBedsGuestsMayUse} 
        baths={numberOfBathroomsGuestsMayUse}
        superH={isSuperHost}
      />
    </div>
  );
};

export default SpecList;