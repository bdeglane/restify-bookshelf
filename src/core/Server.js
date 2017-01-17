'use strict';
const debug = require('debug')('src/core/Server');
const restify = require('restify');
const config = require('../../conf/config');

module.exports = class Server {
  constructor(config) {
    this.config = config[process.env.NODE_ENV];
  }

  /**
   * Return a global variable named API
   * containing a restify instance
   */
  setUp() {
    global.API = restify.createServer({
      name: this.config.name,
      version: this.config.version
    });
  }

  /**
   * Start the restify server
   */
  start() {
    API.listen(this.config.port, () => {
      debug(`${API.name} listening at ${this.config.port}`);
      // import all routes
      require('../app/routing');
    });
  }
};