import React from 'react';
import AdultPlus from './AdultPlus';
import AdultMinus from './AdultMinus';
import ChildrenPlus from './ChildrenPlus';
import ChildrenMinus from './ChildrenMinus';
import InfantPlus from './InfantPlus';
import InfantMinus from './InfantMinus';
import styles from '../../styles/guests.css';

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
    <div className={styles.menu}>
      <div className={styles.guestSelect}>
        <div>Adults</div>
        <div className={styles.number}>
          <AdultPlus plus={handleClickPlusAdults} going={adults} guests={guests} allowed={unitData.guestsAllowed}/>
          <div>{adults}</div>
          <AdultMinus minus={handleClickMinusAdults} going={adults}/>
        </div>
      </div>

      <div className={styles.guestSelect}>
        <div>
          Children
          <div>Ages 2-12</div>
        </div>
        <div className={styles.number}>
          <ChildrenPlus plus={handleClickPlusChildren} going={children} guests={guests} allowed={unitData.guestsAllowed}/>
          <div>{children}</div>
          <ChildrenMinus minus={handleClickMinusChildren} going={children}/>
        </div>
      </div>

      <div className={styles.guestSelect}>
        <div>
          Infants
          <div>Under 2</div>
        </div>
        <div className={styles.number}>
          <InfantPlus plus={handleClickPlusInfants} going={infants} allowed={infantMax}/>
          <div>{infants}</div>
          <InfantMinus minus={handleClickMinusInfants} going={infants}/>
        </div>
      </div>

      <div>
        <button onClick={toggle}>Close</button>
      </div>

    </div>
  );
};

export default GuestMenu;