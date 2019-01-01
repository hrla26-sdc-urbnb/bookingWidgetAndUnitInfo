import React from 'react';
import styles from '../styles/dates.css';
const dateFn = require('date-fns');

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleClickCheckIn = this.handleClickCheckIn.bind(this);
    this.handleClickCheckOut = this.handleClickCheckOut.bind(this);
    this.handleCheckInText = this.handleCheckInText.bind(this);
    this.handleCheckOutText = this.handleCheckOutText.bind(this);
  }

  handleClickCheckIn(e) {
    const { toggleCalendar } = this.props;
    e.preventDefault();
    toggleCalendar();
    this.props.toggleCheckInSelected();
  }

  handleClickCheckOut(e) {
    const { toggleCalendar } = this.props;
    e.preventDefault();
    toggleCalendar();
    this.props.toggleCheckOutSelected();
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
        <div className={styles.title}>Dates</div>
        <div className={styles.container}>
          <div className="checkIn">
            <form action="">
              <input 
                onChange={this.handleCheckInText} 
                onClick={this.handleClickCheckIn} type="text" 
                placeholder="Check in"
                value={this.props.checkInDate}
                className={styles.input}
              />
            </form>
          </div>

          <div className={styles.arrow}>&rarr;</div>

          <div className="checkOut">
            <form action="">
              <input
                onChange={this.handleCheckOutText} 
                onClick={this.handleClickCheckOut} 
                type="text" 
                placeholder="Check out"
                value={this.props.checkOutDate}
                className={styles.input}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Dates;
