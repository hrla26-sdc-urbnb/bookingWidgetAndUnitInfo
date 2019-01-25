const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const React = require('react');
// const { renderToString } = require('react-dom/server');
// const App = require('../client/src/components/App.jsx');
// const BookingWidget = require('../client/src/components/BookingWidgetIso.jsx');

const router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public/')));

app.use('/api', router);

// app.get('/*', (req, res) => {
//   const AppJSX = <App/>;
//   const BookingWidget = <BookingWidget/>;
  // const AppString = renderToString(App);
  // const BookingWidgetString = renderToString(BookingWidget);

  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(AppString);
// });

module.exports = app;
