import React from 'react';

const BookingButton = ({ unitData }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
  }

  let { isBooked } = unitData;
  let button = <button onClick={handleClick}>Book</button>
  if (isBooked) {
    button = <button onClick={handleClick}>Request to Book</button>
  }
  return(
    <div>
      <div>{button}</div>
      <div>youWont text</div>
    </div>
  );
};

export default BookingButton;