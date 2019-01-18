const newrelic = require('newrelic');
const http = require('http');
const app = require('./app');

const PORT = 2100;
const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (err) { console.error(err); } else {
    console.log('Listening on PORT', PORT);
  }
});
