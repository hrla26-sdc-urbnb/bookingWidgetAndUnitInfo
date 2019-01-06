import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import BookingWidgetIso from './components/BookingWidgetIso.jsx';

function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}

let id = generateRandomNumberBetween(11111, 11210);

ReactDOM.render(<App id={id}/>, document.getElementById('descript'));
ReactDOM.render(<BookingWidgetIso id={id}/>, document.getElementById('_bookingWidget'));
