const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./routes');



const app = express();

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public/')));

app.use('/api/units', router);

module.exports = app;
