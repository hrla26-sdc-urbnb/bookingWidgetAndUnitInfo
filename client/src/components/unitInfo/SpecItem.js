import React from 'react';

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
  let host = <div className="superHost">{`${name} is a SuperHost`}</div>
  if (!superH) {
    host = null;
    icon = null;
  }
  return (
    <div className="item container">
      <div className="emoji part">part emoji img</div>
      <div className="part title">{part}</div>
      <div className="part text">
        <ul>
          <li>{guests + ' guests'}</li>
          <li>{rooms + ' bedrooms'}</li>
          <li>{beds + ' beds'}</li>
          <li>{baths + ' baths'}</li>
        </ul>
      </div>
      {icon}
      {host}
    </div>
  );
};

export default SpectItem;
