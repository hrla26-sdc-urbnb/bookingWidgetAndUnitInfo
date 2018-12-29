import React from 'react';
import GuestMenu from './GuestMenu';
import styles from '../../styles/guests.css';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
      guests: 1,
      infantMax: 5,
      word: 'guest',
      isOpen: false,
    };
    this.updateWord = this.updateWord.bind(this);
    this.handleClickPlusAdults = this.handleClickPlusAdults.bind(this);
    this.handleClickMinusAdults = this.handleClickMinusAdults.bind(this);
    this.handleClickPlusChildren = this.handleClickPlusChildren.bind(this);
    this.handleClickMinusChildren = this.handleClickMinusChildren.bind(this);
    this.handleClickPlusInfants = this.handleClickPlusInfants.bind(this);
    this.handleClickMinusInfants = this.handleClickMinusInfants.bind(this);
    // this.addGuestsIncreasePrice = this.addGuestsIncreasePrice.bind(this);
    // this.removeGuestsDecreasePrice = this.removeGuestsDecreasePrice(this);
    this.toggleGuestMenu = this.toggleGuestMenu.bind(this);
  }

  handleClickPlusAdults() {
    this.setState((state) => {
      return { 
        adults: state.adults += 1,
        guest: state.guests += 1,
      };
    });
    this.updateWord();
    this.addGuestsIncreasePrice();
  }

  handleClickMinusAdults() {
    this.setState((state) => {
      return { 
        adults: state.adults -= 1, 
        guests: state.guests -= 1,
      };
    });
    this.updateWord();
    this.removeGuestsDecreasePrice();
  }

  handleClickPlusChildren() {
    this.setState((state) => {
      return { 
        children: state.children += 1,
        guest: state.guests += 1,
      };
    });
    this.updateWord();
    this.addGuestsIncreasePrice();
  }

  handleClickMinusChildren() {
    this.setState((state) => {
      return { 
        children: state.children -= 1, 
        guests: state.guests -= 1,
      };
    });
    this.updateWord();
    this.removeGuestsDecreasePrice();
  }

  handleClickPlusInfants() {
    this.setState((state) => {
      return { infants: state.infants += 1 };
    });
    this.updateWord();
  }

  handleClickMinusInfants() {
    this.setState((state) => {
      return { infants: state.infants -= 1 };
    });
    this.updateWord();
  }

  updateWord() {
    this.setState((state) => {
      if (state.guests > 1 && state.infants === 0) {
        return { word: 'guests'};
      } else if (state.guests > 1 && state.infants > 0) {
        return { word: `guests, ${state.infants} infants` };
      } else if (state.guests === 1 && state.infants > 0) {
        return { word: `guest, ${state.infants} infants` };
      } else if (state.guests === 1 && state.infants === 0) {
        return { word: 'guest'};
      } 
    });
  }

  addGuestsIncreasePrice() {
    this.setState((state) => {
      this.props.addToPrice(state.guests);
    });
  }

  removeGuestsDecreasePrice() {
    this.setState((state) => {
      this.props.removeFromPrice(state.guests);
    });
  }

  toggleGuestMenu() {
    this.setState((state) => {
      return { isOpen: !state.isOpen };
    });
  }

  render() {
    let select = <button 
      className={styles.select} 
      onClick={this.toggleGuestMenu}>
        <div>{`${this.state.guests} ${this.state.word}`}</div>
        <div>&uarr;</div>
    </button>

    let menu = <GuestMenu 
    handleClickPlusAdults={this.handleClickPlusAdults}
    handleClickMinusAdults={this.handleClickMinusAdults}
    handleClickPlusChildren={this.handleClickPlusChildren}
    handleClickMinusChildren={this.handleClickMinusChildren}
    handleClickPlusInfants={this.handleClickPlusInfants}
    handleClickMinusInfants={this.handleClickMinusInfants}
    adults={this.state.adults}
    children={this.state.children}
    guests={this.state.guests}
    infants={this.state.infants}
    unitData={this.props.unitData}
    infantMax={this.state.infantMax}
    toggle={this.toggleGuestMenu}
    />
    if (!this.state.isOpen) {
      menu = null;
      select = <button 
        className={styles.select} 
        onClick={this.toggleGuestMenu}>
        <div>{`${this.state.guests} ${this.state.word}`}</div>
        <div>&darr;</div>
        </button>
    }
    return(
      <div>
        <div>
          {select}
        </div>
          {menu}
        <div>{`${this.props.unitData.guestsAllowed} maximum. Infants don't count toward the number of guests`}</div>
      </div>
    );
  }
}

export default Guests;