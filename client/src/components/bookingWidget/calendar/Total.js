import React from 'react';

const Total = ({ numberOfDaysSelected, unitData, price }) => {
  const { cleaningFee, serviceFee } = unitData;
  return(
    <div>

      <div>
        <div>
          {`$${price} x ${numberOfDaysSelected}`}
        </div>
        <button>Q</button>
        <div>
          {`$${price * numberOfDaysSelected}`}
        </div>
      </div>

      <div>
        <div>
          Cleaning fee
        </div>
        <button>Q</button>
        <div>
          {`$${cleaningFee}`}
        </div>
      </div>

      <div>
        <div>
          Service fee
        </div>
        <button>Q</button>
        <div>
          {`$${serviceFee}`}
        </div>
      </div>

      <div>
        <div>Total</div>
        <div>{`$${(price * numberOfDaysSelected) + cleaningFee + serviceFee}`}</div>
      </div>

    </div>
  );
};

export default Total;
