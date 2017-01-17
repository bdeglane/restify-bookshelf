const debug = require('debug')('/script/database/create.js');
const logger = require('winston');

const orm = require('../../conf/config-orm');
const schema = require('../../src/app/resource/schema');

if (process.env.NODE_ENV == 'development') {
  schema.createSchema(orm.knex, function (err) {
    if (err) {
      process.exit(1);
    }
    knex.destroy();
    process.exit(0);
  });
}