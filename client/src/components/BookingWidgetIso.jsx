import React from 'react';
import axios from 'axios';
import dateFn from 'date-fns';

import PriceReviews from './bookingWidget/PriceReviews.jsx';
import Dates from './bookingWidget/Dates.jsx';
import DisplayCalendar from './bookingWidget/calendar/DisplayCalendar.jsx';
import Guests from './bookingWidget/guestSelect/Guests.jsx';
import BookingButton from './bookingWidget/BookingButton.jsx';
import Total from './bookingWidget/calendar/Total.jsx';

import stylesApp from './styles/app.css';
import stylesGuest from './styles/guests.css';
import stylesCal from './styles/calendar.css';


class BookingWidgetIso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitData: [],
      price: 0,
      calSelectOpen: false,
      checkInDate: '',
      checkOutDate: '',
      validRange: false,
      calSelectOpen: false,
      checkInSelected: false,
      checkOutSelected: false,
      numberOfDaysSelected: 0,

    };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.fetchUnit = this.fetchUnit.bind(this);
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
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

  }

  componentDidMount() {
    this.fetchUnit();
  }

  fetchUnit() {
    axios.get(`http://localhost:2100/api/units/${this.props.id}`)
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

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.toggleCalSelectOpen();
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

  toggleValidRange() {
    this.setState({
      validRange: false,
    });
  }

  toggleCalSelectOpen() {
    this.setState((state) => {
      return {
        calSelectOpen: !state.calSelectOpen,
      };
    });
    // document.addEventListener('click', this.handleOutsideClick, false);
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


  render() {
    if (this.state.calSelectOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    }
    if (!this.state.calSelectOpen) {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    // let {
    //   unitData,
    //   price,
    //   toggleCalSelectOpen,
    //   checkInDate,
    //   checkOutDate,
    //   updateCheckIn,
    //   updateCheckOut,
    //   toggleCheckIn,
    //   toggleCheckOut,
    //   calSelectOpen,
    //   checkInSelected,
    //   checkOutSelected,
    //   toggleValidRange,
    //   handleNodeClick,
    //   addToPrice,
    //   removeFromPrice,
    //   finalPrice,
    // } = this.props;
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
      <div className={stylesApp.stickThis}>
        <div className={stylesApp.bookingContainer}>
  
          <div className={stylesApp.bookingWidget}>
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
  
            <div ref={node => { this.node = node; }} className={stylesCal.container}>
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
  
            <div className="guests container">
              <div className={stylesGuest.heading}>Guests</div>
              <Guests unitData={this.state.unitData} addToPrice={this.addToPrice} removeFromPrice={this.removeFromPrice}/>
            </div>
  
            <div>
              {finalPrice}
            </div>
  
            <div className="bookingButton container">
              <BookingButton finalPrice={finalPrice} unitData={this.state.unitData} toggleCalendar={this.toggleCalSelectOpen} toggleCheckIn={this.toggleCheckIn}/>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
}



export default BookingWidgetIso;
