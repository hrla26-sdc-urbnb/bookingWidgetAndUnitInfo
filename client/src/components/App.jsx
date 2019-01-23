import React from 'react';
import axios from 'axios';
import dateFn from 'date-fns';

import OwnerUnit from './unitInfo/OwnerUnit.jsx';
import SpecList from './unitInfo/SpecList.jsx';
import Descriptions from './unitInfo/Descriptions.jsx';
import AmenitiesList from './unitInfo/AmenitiesList.jsx';
import PriceReviews from './bookingWidget/PriceReviews.jsx';
import Dates from './bookingWidget/Dates.jsx';
import Guests from './bookingWidget/guestSelect/Guests.jsx';
import BookingButton from './bookingWidget/BookingButton.jsx';
import DisplayCalendar from './bookingWidget/calendar/DisplayCalendar.jsx';
import Total from './bookingWidget/calendar/Total.jsx';
import ShowAmens from './unitInfo/ShowAmens.jsx';

import stylesApp from './styles/app.css';
import stylesDes from './styles/descriptions.css';
import stylesAmen from './styles/amenities.css';
import stylesBook from './styles/bookingWidget.css';
import BookingWidgetIso from './BookingWidgetIso.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
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
      showAllAmens: false,
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
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleContactHostClick = this.handleContactHostClick.bind(this);
    this.toggleShowAllAmens = this.toggleShowAllAmens.bind(this);
    this.closeShowAll = this.closeShowAll.bind(this);
  }


  componentDidMount() {
    this.fetchUnit();
  }

  handleClick(e) {
    e.preventDefault();
    console.log('click!');
  }

  fetchUnit() {
    axios.get(`http://localhost:3400/api/units/${this.props.id}`) // Proxy server EC2 IP address
      .then(({ data }) => {
        const { unitData, ownerData } = data;
        this.setState({
          unitData: unitData[0],
          ownerData: {
            id: unitData[0].owner_id,
            name: unitData[0].name,
            photo: unitData[0].photo,
            issuperhost: unitData[0].issuperhost,
          },
          price: unitData[0].pricepernight,
          original: unitData[0].pricepernight,
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
        calSelectOpen: !state.calSelectOpen,
      };
    });
    // document.addEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({
      calSelectOpen: false,
    });
    document.removeEventListener('click', this.handleOutsideClick, false);
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

  handleContactHostClick(e) {
    e.preventDefault();
  }

  toggleShowAllAmens() {
    this.setState((state) => {
      return { showAllAmens: !state.showAllAmens };
    });
  }

  closeShowAll() {
    this.setState({
      showAllAmens: false,
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

    let showAll = <ShowAmens close={this.closeShowAll} unitData={this.state.unitData}/>

    if (!this.state.showAllAmens) {
      showAll = null;
    }

    return (
      <div>
        <div>{showAll}</div>
        <div className={stylesApp.container}>
          {/* <div className={stylesBook.container}>
            <BookingWidgetIso 
              unitData={this.state.unitData}
              price={this.state.price}
              toggleCalSelectOpen={this.toggleCalSelectOpen}
              checkInDate={this.state.checkInDate}
              checkOutDate={this.state.checkOutDate}
              updateCheckIn={this.updateCheckIn}
              updateCheckOut={this.updateCheckOut}
              toggleCheckIn={this.toggleCheckIn}
              toggleCheckOut={this.toggleCheckOut}
              calSelectOpen={this.state.calSelectOpen}
              checkInSelected={this.state.checkInSelected}
              checkOutSelected={this.state.checkOutSelected}
              toggleValidRange={this.toggleValidRange}
              handleNodeClick={this.handleNodeClick}
              addToPrice={this.addToPrice}
              removeFromPrice={this.removeFromPrice}
              finalPrice={finalPrice} 
            />
          </div> */}

          <div className={stylesApp.modules}>
              <div className={stylesApp.unitInfo}>

                <div className="ownerUnit container">
                  <OwnerUnit unitData={this.state.unitData} ownerData={this.state.ownerData}/>
                </div>

                <div className="specs container">
                  <SpecList unitData={this.state.unitData} ownerData={this.state.ownerData}/>
                </div>

                <div className="descript container">
                  <div className={stylesDes.text}>
                    <div>{this.state.unitData.summaryDescription}</div>
                  </div>
                  <Descriptions unitData={this.state.unitData}/>

                  <div className={stylesDes.contactHost}>
                    <a href="" onClick={this.handleContactHostClick}>Contact host</a>
                  </div>

                </div>

                <div className="amen container">
                  <div className={stylesAmen.title}>Amenities</div>
                  <div className="amenItems container">
                    <AmenitiesList unitData={this.state.unitData} toggleShowAllAmens={this.toggleShowAllAmens}/>
                  </div>
                </div>

              </div>

              {/* <div className={stylesApp.bookingContainer}>


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
                    <Guests handleNodeClick={this.handleNodeClick} unitData={this.state.unitData} addToPrice={this.addToPrice} removeFromPrice={this.removeFromPrice}/>
                  </div>

                  <div>
                    {finalPrice}
                  </div>

                  <div className="bookingButton container">
                    <BookingButton unitData={this.state.unitData} toggleCalendar={this.toggleCalSelectOpen} toggleCheckIn={this.toggleCheckIn}/>
                  </div>

                </div>
              </div> */}

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
