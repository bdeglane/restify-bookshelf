const debug = require('debug')('/script/database/create.js');
const logger = require('winston');
const readline = require('readline');

const orm = require('../../conf/config-orm');
const schema = require('../../src/app/resource/schema');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`your NODE_ENV is ${process.env.NODE_ENV}\nWould you drop and create a new database schema ? (y/n) `, (answer) => {

  if (answer.match(/^y(es)?$/i)) {
    schema.createSchema(orm.knex, function (err) {
      if (err) {
        process.exit(1);
      }
      knex.destroy();
      process.exit(0);
    });
  } else {
    console.log(`Doing nothing`);
    process.exit(0);
  }
  rl.close();
});