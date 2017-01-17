'use strict';

const config = {
  development: {
    name: 'api',
    version: '0.0.1',
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    database: {
      host: '192.168.99.100',
      port: '5432',
      database: 'test_db',
      user: 'test',
      password: 'test'
    }
  }
};

module.exports = config;