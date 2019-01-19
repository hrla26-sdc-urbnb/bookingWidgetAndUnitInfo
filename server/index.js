const newrelic = require('newrelic');
const http = require('http');
const app = require('./app');

const PORT = 2100;
const server = http.createServer(app);

server.listen(PORT, () => { console.log('Listening on PORT', PORT); });
server.on('error', (err) => { console.error(err); });
