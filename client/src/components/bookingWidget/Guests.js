import React from 'react';
import AdultPlus from './AdultPlus';
import AdultMinus from './AdultMinus';
import ChildrenPlus from './ChildrenPlus';
import ChildrenMinus from './ChildrenMinus';
import InfantPlus from './InfantPlus';
import InfantMinus from './InfantMinus';

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
    };
    this.updateWord = this.updateWord.bind(this);
    this.handleClickPlusAdults = this.handleClickPlusAdults.bind(this);
    this.handleClickMinusAdults = this.handleClickMinusAdults.bind(this);
    this.handleClickPlusChildren = this.handleClickPlusChildren.bind(this);
    this.handleClickMinusChildren = this.handleClickMinusChildren.bind(this);
    this.handleClickPlusInfants = this.handleClickPlusInfants.bind(this);
    this.handleClickMinusInfants = this.handleClickMinusInfants.bind(this);
  }

  handleClickPlusAdults() {
    this.setState((state) => {
      return { 
        adults: state.adults += 1,
        guest: state.guests += 1,
      };
    });
    this.updateWord();
  }

  handleClickMinusAdults() {
    this.setState((state) => {
      return { 
        adults: state.adults -= 1, 
        guests: state.guests -= 1,
      };
    });
    this.updateWord();
  }

  handleClickPlusChildren() {
    this.setState((state) => {
      return { 
        children: state.children += 1,
        guest: state.guests += 1,
      };
    });
    this.updateWord();
  }

  handleClickMinusChildren() {
    this.setState((state) => {
      return { 
        children: state.children -= 1, 
        guests: state.guests -= 1,
      };
    });
    this.updateWord();
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

  render() {
    let select = <button>{`${this.state.guests} ${this.state.word}`}</button>
    return(
      <div>
        {select}
        <div className="guests menu">

          <div className="adults guests">
            <div>Adults</div>
            <AdultPlus plus={this.handleClickPlusAdults} going={this.state.adults} guests={this.state.guests} allowed={this.props.unitData.guestsAllowed}/>
            <div>{this.state.adults}</div>
            <AdultMinus minus={this.handleClickMinusAdults} going={this.state.adults}/>
          </div>

          <div className="children guests">
            <div>Children</div>
            <div>Ages 2-12</div>
            <ChildrenPlus plus={this.handleClickPlusChildren} going={this.state.children} guests={this.state.guests} allowed={this.props.unitData.guestsAllowed}/>
            <div>{this.state.children}</div>
            <ChildrenMinus minus={this.handleClickMinusChildren} going={this.state.children}/>
          </div>

        <div className="infants guests">
            <div>Infants</div>
            <div>Under 2</div>
            <InfantPlus plus={this.handleClickPlusInfants} going={this.state.infants} allowed={this.state.infantMax}/>
            <div>{this.state.infants}</div>
            <InfantMinus minus={this.handleClickMinusInfants} going={this.state.infants}/>
          </div>
        </div>

        <div>{`${this.props.unitData.guestsAllowed} maximum. Infants don't count toward the number of guests`}</div>
      </div>
    );
  }
}

export default Guests;