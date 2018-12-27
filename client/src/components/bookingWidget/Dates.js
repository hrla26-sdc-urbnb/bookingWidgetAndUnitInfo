import React from 'react';

const Dates = ({ toggleCalendar }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('click!');
    toggleCalendar();
  }

  return(
    <div>
          <div className="checkIn">
            <form action="">
              <input onClick={handleClick} type="text" placeholder="Check in"/>
            </form>
          </div>

          <div className="arrow">--></div>

          <div className="checkOut">
             <form action="">
               <input onClick={handleClick} type="text" placeholder="Check out"/>
            </form>
          </div>
    </div>
  );
};

export default Dates;