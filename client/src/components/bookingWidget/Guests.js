import React from 'react';
import GuestPlus from './GuestPlus';
import GuestMinus from './GuestMinus';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
      guests: 1,
      infantMax: 5,
    };
    this.guest = this.guest.bind(this);
  }

  guest() {
    if (this.state.guests === 1) {
      return 'guest';
    } else {
      return 'guests';
    }
  }

  render() {
    let select = <button>{`${this.state.guests} ${this.guest()}`}</button>
    return(
      <div>
        {select}
        <div className="guests menu">

          <div className="adults guests">
            <div>Adults</div>
            <GuestPlus going={this.state.adults} allowed={this.props.unitData.guestsAllowed}/>
            <div>{this.state.adults}</div>
            <GuestMinus going={this.state.adults}/>
          </div>

          <div className="children guests">
            <div>Children</div>
            <div>Ages 2-12</div>
            <GuestPlus going={this.state.children} allowed={this.props.unitData.guestsAllowed}/>
            <div>{this.state.children}</div>
            <GuestMinus going={this.state.children}/>
          </div>

        <div className="infants guests">
            <div>Infants</div>
            <div>Under 2</div>
            <GuestPlus going={this.state.infants} allowed={this.props.unitData.infantMax}/>
            <div>{this.state.infants}</div>
            <GuestMinus going={this.state.infants}/>
          </div>
        </div>

        <div>{`${this.props.unitData.guestsAllowed} maximum. Infants don't count toward the number of guests`}</div>
      </div>
    );
  }
}

export default Guests;