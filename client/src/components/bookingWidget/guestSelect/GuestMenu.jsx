import React from 'react';
import AdultPlus from './AdultPlus.jsx';
import AdultMinus from './AdultMinus.jsx';
import ChildrenPlus from './ChildrenPlus.jsx';
import ChildrenMinus from './ChildrenMinus.jsx';
import InfantPlus from './InfantPlus.jsx';
import InfantMinus from './InfantMinus.jsx';
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

  return (
    <div className={styles.menu}>
      <div className={styles.guestSelect}>
        <div className={styles.title}>Adults</div>
        <div className={styles.numberGroup}>
          <AdultMinus minus={handleClickMinusAdults} going={adults} />
          <div className={styles.number}>{adults}</div>
          <AdultPlus plus={handleClickPlusAdults} going={adults} guests={guests} allowed={unitData.guestsallowed} />
        </div>
      </div>

      <div className={styles.guestSelect}>
        <div className={styles.title}>
          Children
          <div className={styles.text}>Ages 2-12</div>
        </div>
        <div className={styles.numberGroup}>
          <ChildrenMinus minus={handleClickMinusChildren} going={children} />
          <div className={styles.number}>{children}</div>
          <ChildrenPlus plus={handleClickPlusChildren} going={children} guests={guests} allowed={unitData.guestsallowed} />
        </div>
      </div>

      <div className={styles.guestSelect}>
        <div className={styles.title}>
          Infants
          <div className={styles.text}>Under 2</div>
        </div>
        <div className={styles.numberGroup}>
          <InfantMinus minus={handleClickMinusInfants} going={infants} />
          <div className={styles.number}>{infants}</div>
          <InfantPlus plus={handleClickPlusInfants} going={infants} allowed={infantMax} />
        </div>
      </div>

      <div className={styles.bottomText}>
        {`${unitData.guestsallowed} maximum. Infants don't count toward the number of guests.`}
      </div>

      <div className={styles.closeContainer}>
        <button type="button" className={styles.close} onClick={toggle}>Close</button>
      </div>

    </div>
  );
};

export default GuestMenu;
