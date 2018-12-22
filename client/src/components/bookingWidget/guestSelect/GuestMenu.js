import React from 'react';
import AdultPlus from './AdultPlus';
import AdultMinus from './AdultMinus';
import ChildrenPlus from './ChildrenPlus';
import ChildrenMinus from './ChildrenMinus';
import InfantPlus from './InfantPlus';
import InfantMinus from './InfantMinus';

const GuestMenu = ({
  handleClickPlusAdults,
  handleClickMinusAdults,
  handleClickPlusChildren,
  handleClickMinusChildren,
  handleClickPlusInfants,
  handleClickMinusInfants,
  adults,
  children,
  guests,
  infants,
  unitData,
  infantMax,
  toggle,
}) => {

  return(
    <div className="guests menu">
      <div className="adults guests">
        <div>Adults</div>
        <AdultPlus plus={handleClickPlusAdults} going={adults} guests={guests} allowed={unitData.guestsAllowed}/>
        <div>{adults}</div>
        <AdultMinus minus={handleClickMinusAdults} going={adults}/>
      </div>

      <div className="children guests">
        <div>Children</div>
        <div>Ages 2-12</div>
        <ChildrenPlus plus={handleClickPlusChildren} going={children} guests={guests} allowed={unitData.guestsAllowed}/>
        <div>{children}</div>
        <ChildrenMinus minus={handleClickMinusChildren} going={children}/>
      </div>

      <div className="infants guests">
        <div>Infants</div>
        <div>Under 2</div>
        <InfantPlus plus={handleClickPlusInfants} going={infants} allowed={infantMax}/>
        <div>{infants}</div>
        <InfantMinus minus={handleClickMinusInfants} going={infants}/>
      </div>

      <div>
        <button onClick={toggle}>Close</button>
      </div>

    </div>
  );
};

export default GuestMenu;