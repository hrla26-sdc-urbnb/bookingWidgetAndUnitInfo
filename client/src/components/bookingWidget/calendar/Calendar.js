import React from 'react';
import CalendarData from './CalendarData';
import ClearDates from './ClearDates';
const date = require('date-fns');
const calMaker = require('./calendarMaker');

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      thisMonth: '',
      thisYear: '',
      thisDate: '',
      displayMonth: '',
      displayYear: '',
      checkIn: '',
      checkOut: '',
      calMatrix: [
        Array(7).fill('a'),
        Array(7).fill('b'),
        Array(7).fill('c'),
        Array(7).fill('d'),
        Array(7).fill('e'),
        Array(7).fill('f'),
      ],
    };

    this.monthMap = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.dayMap = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];

    this.viewNextMonthsDates = this.viewNextMonthsDates.bind(this);
    this.viewPreviousMonthsDates = this.viewPreviousMonthsDates.bind(this);
  }

  componentDidMount() {
    this.setState((state) => {
      const firstDay = this.dayMap[date.startOfMonth(state.today).getDay()];
      const daysInMonth = date.getDaysInMonth(state.today);
      return {
        thisDate: state.today.getDate(),
        thisMonth: state.today.getMonth(),
        thisYear: state.today.getFullYear(),
        displayMonth: state.today.getMonth(),
        displayYear: state.today.getFullYear(),
        calMatrix: calMaker(firstDay, daysInMonth),
      };
    });
  }

  viewNextMonthsDates(e) {
    e.preventDefault();
    this.setState((state) => {
      const nextMonth = this.monthMap[((state.displayMonth + 1) % 12)];
      let year = state.displayYear;
      if (state.displayMonth === 11) {
        year += 1;
      }
      const daysInMonth = date.getDaysInMonth(`${nextMonth} ${year}`);
      const firstDay = this.dayMap[date.startOfMonth(`${nextMonth} ${year}`).getDay()];
      return {
        calMatrix: calMaker(firstDay, daysInMonth),
        displayMonth: ((state.displayMonth + 1) % 12),
        displayYear: year,
      };
    });
  }

  viewPreviousMonthsDates(e) {
    e.preventDefault();
    this.setState((state) => {
      let refresh = null;
      let year = state.displayYear;
      if (state.displayMonth === 0) {
        year -= 1;
        refresh = 11;
      }
      const previousMonth = this.monthMap[refresh || ((state.displayMonth - 1) % 12)];
      const daysInMonth = date.getDaysInMonth(`${previousMonth} ${year}`);
      const firstDay = this.dayMap[date.startOfMonth(`${previousMonth} ${year}`).getDay()];
      return {
        calMatrix: calMaker(firstDay, daysInMonth),
        displayMonth: refresh || ((state.displayMonth - 1) % 12),
        displayYear: year,
      };
    });
  }


  render() {
    const { checkInDate, checkOutDate } = this.props;
    const month = this.monthMap[this.state.displayMonth];
    const year = this.state.displayYear;
    let clear;
    if (checkInDate !== '' || checkOutDate !== '') {
      clear = <ClearDates updateCheckIn={this.props.updateCheckIn} updateCheckOut={this.props.updateCheckOut}/>;
    }
    return(
      <div>
        <div className="monthArrows container">
          <button onClick={this.viewPreviousMonthsDates}>left arrow</button>
          <div className="month name">{month} {year}</div>

          <button onClick={this.viewNextMonthsDates}>right arrow</button>
        </div>
        <table>
          <tbody>

          <tr>
            <td>Su</td>
            <td>Mo</td>
            <td>Tu</td>
            <td>We</td>
            <td>Th</td>
            <td>Fr</td>
            <td>Sa</td>
          </tr>

          <tr>
            {this.state.calMatrix[0].map((date, index) => {
              return (
                <CalendarData 
                  date={date} 
                  key={index}
                  thisDate={this.state.thisDate}
                  thisMonth={this.state.thisMonth}
                  thisYear={this.state.thisYear}
                  displayMonth={this.state.displayMonth}
                  displayYear={this.state.displayYear}
                  availableFrom={this.props.unitData.dateAvailableFrom}
                  availableTo={this.props.unitData.dateAvailableTo}
                  monthMap={this.monthMap}
                />);
            })}
          </tr>

          <tr>
          {this.state.calMatrix[1].map((date, index) => {
              return (
                <CalendarData 
                  date={date} 
                  key={index}
                  thisDate={this.state.thisDate}
                  thisMonth={this.state.thisMonth}
                  thisYear={this.state.thisYear}
                  displayMonth={this.state.displayMonth}
                  displayYear={this.state.displayYear}
                  availableFrom={this.props.unitData.dateAvailableFrom}
                  availableTo={this.props.unitData.dateAvailableTo}
                  monthMap={this.monthMap}
                />);
            })}
          </tr>

          <tr>
          {this.state.calMatrix[2].map((date, index) => {
              return (
                <CalendarData 
                  date={date} 
                  key={index}
                  thisDate={this.state.thisDate}
                  thisMonth={this.state.thisMonth}
                  thisYear={this.state.thisYear}
                  displayMonth={this.state.displayMonth}
                  displayYear={this.state.displayYear}
                  availableFrom={this.props.unitData.dateAvailableFrom}
                  availableTo={this.props.unitData.dateAvailableTo}
                  monthMap={this.monthMap}
                />);
            })}
          </tr>

          <tr>
          {this.state.calMatrix[3].map((date, index) => {
              return (
                <CalendarData 
                  date={date} 
                  key={index}
                  thisDate={this.state.thisDate}
                  thisMonth={this.state.thisMonth}
                  thisYear={this.state.thisYear}
                  displayMonth={this.state.displayMonth}
                  displayYear={this.state.displayYear}
                  availableFrom={this.props.unitData.dateAvailableFrom}
                  availableTo={this.props.unitData.dateAvailableTo}
                  monthMap={this.monthMap}
                />);
            })}
          </tr>

          <tr>
          {this.state.calMatrix[4].map((date, index) => {
              return (
                <CalendarData 
                  date={date} 
                  key={index}
                  thisDate={this.state.thisDate}
                  thisMonth={this.state.thisMonth}
                  thisYear={this.state.thisYear}
                  displayMonth={this.state.displayMonth}
                  displayYear={this.state.displayYear}
                  availableFrom={this.props.unitData.dateAvailableFrom}
                  availableTo={this.props.unitData.dateAvailableTo}
                  monthMap={this.monthMap}
                />);
            })}
          </tr>

          <tr>
          {this.state.calMatrix[5].map((date, index) => {
              return (
                <CalendarData 
                  date={date} 
                  key={index}
                  thisDate={this.state.thisDate}
                  thisMonth={this.state.thisMonth}
                  thisYear={this.state.thisYear}
                  displayMonth={this.state.displayMonth}
                  displayYear={this.state.displayYear}
                  availableFrom={this.props.unitData.dateAvailableFrom}
                  availableTo={this.props.unitData.dateAvailableTo}
                  monthMap={this.monthMap}
                />);
            })}
          </tr>

          </tbody>
        </table>

        <div>Updated...</div>
        {clear}
        <div>Question Mark</div>
      </div>
    );
  }
};

export default Calendar;
