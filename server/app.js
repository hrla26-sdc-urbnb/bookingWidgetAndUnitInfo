const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./routes');


const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true,
}));
app.use(express.static(path.join(__dirname, '../client/')));

app.use('/api/units', router);

module.exports = app;
