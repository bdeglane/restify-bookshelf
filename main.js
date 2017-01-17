const debug = require('debug')('main.js');

const Server = require('./src/core/Server');
const config = require('./conf/config');

let server = new Server(config);
server.setUp();
server.start();