import React from 'react';
import axios from 'axios';
import dateFn from 'date-fns';

import OwnerUnit from './unitInfo/OwnerUnit';
import SpecList from './unitInfo/SpecList';
import Descriptions from './unitInfo/Descriptions';
import AmenitiesList from './unitInfo/AmenitiesList';
import PriceReviews from './bookingWidget/PriceReviews';
import Dates from './bookingWidget/Dates';
import Guests from './bookingWidget/guestSelect/Guests';
import BookingButton from './bookingWidget/BookingButton';
import DisplayCalendar from './bookingWidget/calendar/DisplayCalendar';
import Total from './bookingWidget/calendar/Total';

import styles from './styles/app.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unitData: [],
      ownerData: [],
      price: 0,
      original: 0,
      checkInDate: '',
      checkOutDate: '',
      validRange: false,
      calSelectOpen: false,
      checkInSelected: false,
      checkOutSelected: false,
      numberOfDaysSelected: 0,
    };
    this.fetchUnit = this.fetchUnit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addToPrice = this.addToPrice.bind(this);
    this.removeFromPrice = this.removeFromPrice.bind(this);
    this.toggleCalSelectOpen = this.toggleCalSelectOpen.bind(this);
    this.maybeCloseCalendar = this.maybeCloseCalendar.bind(this);
    this.updateCheckIn = this.updateCheckIn.bind(this);
    this.updateCheckOut = this.updateCheckOut.bind(this);
    this.toggleCheckIn = this.toggleCheckIn.bind(this);
    this.toggleCheckOut = this.toggleCheckOut.bind(this);
    this.checkIfWithinRange = this.checkIfWithinRange.bind(this);
    this.toggleValidRange = this.toggleValidRange.bind(this);
  }


  componentDidMount() {
    this.fetchUnit();
  }

  handleClick(e) {
    e.preventDefault();
    console.log('click!');
  }

  fetchUnit() {
    axios.get(`/api/units/${generateRandomNumberBetween(11111, 11210)}`)
    .then(({ data }) => {
      console.log('axios -->', data);
      const { unitData, ownerData } = data;
      this.setState({
        unitData: unitData[0],
        ownerData: ownerData[0],
        price: unitData[0].pricePerNight,
        original: unitData[0].pricePerNight,
      });
    })
    .catch((err) => {
      console.log('error fetching unit -->', err);
    });
  }

  addToPrice(going) {
    if (going <= 2) {
      return;
    }
    this.setState((state) => {
      const price = Math.floor(((0.20 * state.original) + state.price));
      return { price };
    });
  }

  removeFromPrice(going) {
    if (going <= 2) {
      this.setState((state) => {
        return { price: state.original };
      });
    } else {
      this.setState((state) => {
        const price = Math.floor(state.price - (state.original * 0.20));
        return { price };
      });
    }
  }

  toggleCalSelectOpen() {
    this.setState((state) => {
      return {
        calSelectOpen: true,
      };
    });
  }

  updateCheckIn(dateStr) {
    this.setState({
      checkInDate: dateStr,
    });
    this.maybeCloseCalendar();
  }

  updateCheckOut(dateStr) {
    this.setState({
      checkOutDate: dateStr,
    });
    this.maybeCloseCalendar();
  }

  maybeCloseCalendar() {
    this.setState((state) => {
      if (state.checkInDate !== '' && state.checkOutDate !== '') {
        const isBefore = dateFn.isBefore(state.checkOutDate, state.checkInDate);
        if (isBefore) {
          return {
            calSelectOpen: false,
            checkInDate: state.checkOutDate,
            checkOutDate: state.checkInDate,
          };
        }
        return { calSelectOpen: false };
      }
    });
    this.checkIfWithinRange();
  }

  toggleCheckIn() {
    this.setState({
      checkInSelected: true,
      checkOutSelected: false,
    });
  }

  toggleCheckOut() {
    this.setState({
      checkInSelected: false,
      checkOutSelected: true,
    });
  }

  checkIfWithinRange() {
    this.setState((state) => {
      const { dateAvailableFrom, dateAvailableTo } = state.unitData;
      const validStart = dateFn.isWithinRange(new Date(state.checkInDate), new Date(dateAvailableFrom), new Date(dateAvailableTo));
      const validStop = dateFn.isWithinRange(new Date(state.checkOutDate), new Date(dateAvailableFrom), new Date(dateAvailableTo));
      if (validStart && validStop) {
        const numberOfDaysSelected = Math.abs(dateFn.differenceInCalendarDays(new Date(state.checkInDate), new Date(state.checkOutDate)));
        return {
          numberOfDaysSelected,
          validRange: true,
        };
      }
    });
  }

  toggleValidRange() {
    this.setState({
      validRange: false,
    });
  }


  render() {
    let finalPrice = <Total 
      unitData={this.state.unitData} 
      numberOfDaysSelected={this.state.numberOfDaysSelected} 
      price={this.state.price}
    />;

    const { validRange } = this.state;
    if (!validRange) {
      finalPrice = null;
    }
    return (
      <div className={styles.modules}>
          <div className={styles.unitInfo}>

            <div className="ownerUnit container">
              <OwnerUnit unitData={this.state.unitData} ownerData={this.state.ownerData}/>
            </div>

            <div className="specs container">
              <SpecList unitData={this.state.unitData} ownerData={this.state.ownerData}/>
            </div>

            <div className="descript container">
              <div className="summary">
                <div>{this.state.unitData.summaryDescription}</div>
              </div>
              <Descriptions unitData={this.state.unitData}/>

              <div className="contact container">
                <a href="">Contact Host</a>
              </div>

            </div>

            <div className="amen container">
              <div>Amenities</div>
              <div className="amenItems container">
                <AmenitiesList unitData={this.state.unitData}/>
              </div>
            </div>

          </div>

          <div className={styles.bookingWidget}>

            <div>
              <PriceReviews unitData={this.state.unitData} price={this.state.price}/>
            </div>

            <div className="dates container">
              <Dates 
                toggleCalendar={this.toggleCalSelectOpen}
                checkInDate={this.state.checkInDate}
                checkOutDate={this.state.checkOutDate}
                updateCheckIn={this.updateCheckIn}
                updateCheckOut={this.updateCheckOut}
                toggleCheckInSelected={this.toggleCheckIn}
                toggleCheckOutSelected={this.toggleCheckOut}
              />
            </div>

            <div className="guests container">
              <div>Guests</div>
              <Guests unitData={this.state.unitData} addToPrice={this.addToPrice} removeFromPrice={this.removeFromPrice}/>
            </div>

            <div className="total container">
              {finalPrice}
            </div>

            <div className="bookingButton container">
              <BookingButton unitData={this.state.unitData} toggleCalendar={this.toggleCalSelectOpen}/>
            </div>

            <div className="report container">
              <div>report emoji</div>
              <a href="" onClick={this.handleClick}>Report this listing</a>
            </div>

            <div className="calendar container">
              <DisplayCalendar
                isOpen={this.state.calSelectOpen} 
                unitData={this.state.unitData}
                updateCheckIn={this.updateCheckIn}
                updateCheckOut={this.updateCheckOut}
                checkInDate={this.state.checkInDate}
                checkOutDate={this.state.checkOutDate}
                checkInSelected={this.state.checkInSelected}
                checkOutSelected={this.state.checkOutSelected}
                toggleCheckIn={this.toggleCheckIn}
                toggleCheckOut={this.toggleCheckOut}
                toggleValidRange={this.toggleValidRange}
              />
            </div>

          </div>
      </div>
    );
  }
}

export default App;

function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}
