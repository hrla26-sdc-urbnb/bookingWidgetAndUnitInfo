import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import BookingWidgetIso from './components/BookingWidgetIso.jsx';

const generateRandomNumberBetween = (beg, end) => Math.floor((Math.random() * (end - beg + 1)) + beg);
const id = generateRandomNumberBetween(4569598, 14569595); // min and max ids in units db table

ReactDOM.render(<App id={id} />, document.getElementById('descript'));
ReactDOM.render(<BookingWidgetIso id={id} />, document.getElementById('_bookingWidget'));

// ReactDOM.hydrate(<App id={id} />, document.getElementById('descript'));
// ReactDOM.hydrate(<BookingWidgetIso id={id} />, document.getElementById('_bookingWidget'));
