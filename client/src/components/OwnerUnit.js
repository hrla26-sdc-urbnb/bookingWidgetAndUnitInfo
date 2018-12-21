import React from 'react';

const OwnerUnit = ({ unitData, ownerData }) => {
  let { partOfUnitFromRent, title, city } = unitData;
  let { name, photo, isSuperHost } = ownerData;
  return (
    <div>
      <div className="unitTitle container">
        <div className="partAvailable">{partOfUnitFromRent}</div>
        <div>{title}</div>
        <div>{city}</div>
      </div>

      <div className="owner container">
        <div>
          {/* <img src={photo} /> */}
        </div>
        <div>{'SuperHost: ' + isSuperHost}</div>
        <div>{name}</div>
      </div>
    </div>
);};

export default OwnerUnit;