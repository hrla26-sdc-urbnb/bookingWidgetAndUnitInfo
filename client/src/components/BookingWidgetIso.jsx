import React from 'react';
import PriceReviews from './bookingWidget/PriceReviews.jsx';
import Dates from './bookingWidget/Dates.jsx';
import DisplayCalendar from './bookingWidget/calendar/DisplayCalendar.jsx';
import Guests from './bookingWidget/guestSelect/Guests.jsx';
import BookingButton from './bookingWidget/BookingButton.jsx';

import stylesApp from './styles/app.css';
import stylesGuest from './styles/guests.css';
import stylesCal from './styles/calendar.css';


class BookingWidgetIso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calOpen: false,
    };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    this.setState({
      calOpen: this.props.calSelectOpen,
    });
  }

  handleOpen(isCalOpen) {
    if (isCalOpen) {
      this.props.toggleCalSelectOpen();
      document.addEventListener('click', this.handleOutsideClick, false);
    }
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.toggleCalSelectOpen();
  }


  render() {
    if (this.props.calSelectOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    }
    if (!this.props.calSelectOpen) {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    let {
      unitData,
      price,
      toggleCalSelectOpen,
      checkInDate,
      checkOutDate,
      updateCheckIn,
      updateCheckOut,
      toggleCheckIn,
      toggleCheckOut,
      calSelectOpen,
      checkInSelected,
      checkOutSelected,
      toggleValidRange,
      handleNodeClick,
      addToPrice,
      removeFromPrice,
      finalPrice,
    } = this.props;

    return (
      <div>
        <div className={stylesApp.bookingContainer}>
  
          <div className={stylesApp.bookingWidget}>
            <div>
              <PriceReviews unitData={unitData} price={price}/>
            </div>
  
            <div className="dates container">
              <Dates 
                toggleCalendar={toggleCalSelectOpen}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                updateCheckIn={updateCheckIn}
                updateCheckOut={updateCheckOut}
                toggleCheckInSelected={toggleCheckIn}
                toggleCheckOutSelected={toggleCheckOut}
              />
            </div>
  
            <div ref={node => { this.node = node; }} className={stylesCal.container}>
              <DisplayCalendar
                isOpen={calSelectOpen} 
                unitData={unitData}
                updateCheckIn={updateCheckIn}
                updateCheckOut={updateCheckOut}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                checkInSelected={checkInSelected}
                checkOutSelected={checkOutSelected}
                toggleCheckIn={toggleCheckIn}
                toggleCheckOut={toggleCheckOut}
                toggleValidRange={toggleValidRange}
              />
            </div>
  
            <div className="guests container">
              <div className={stylesGuest.heading}>Guests</div>
              <Guests handleNodeClick={handleNodeClick} unitData={unitData} addToPrice={addToPrice} removeFromPrice={removeFromPrice}/>
            </div>
  
            <div>
              {finalPrice}
            </div>
  
            <div className="bookingButton container">
              <BookingButton unitData={unitData} toggleCalendar={toggleCalSelectOpen} toggleCheckIn={toggleCheckIn}/>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
}



export default BookingWidgetIso;
