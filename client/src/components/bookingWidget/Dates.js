import React from 'react';
const dateFn = require('date-fns');

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleCheckInText = this.handleCheckInText.bind(this);
    this.handleCheckOutText = this.handleCheckOutText.bind(this);
  }

  handleClick(e) {
    const { toggleCalendar } = this.props;
    e.preventDefault();
    toggleCalendar();
  }

  handleCheckInText(e) {
    this.props.updateCheckIn(e.target.value);
  }

  handleCheckOutText(e) {
    this.props.updateCheckOut(e.target.value);
  }

  render() {
    return(
      <div>
        <div className="checkIn">
          <form action="">
            <input 
              onChange={this.handleCheckInText} 
              onClick={this.handleClick} type="text" 
              placeholder="Check in"
              value={this.props.checkInDate}
            />
          </form>
        </div>

        <div className="arrow">--></div>

        <div className="checkOut">
          <form action="">
            <input
              onChange={this.handleCheckOutText} 
              onClick={this.handleClick} 
              type="text" 
              placeholder="Check out"
              value={this.props.checkOutDate}
            />
          </form>
        </div>
      </div>
    );
  }
}


export default Dates;
