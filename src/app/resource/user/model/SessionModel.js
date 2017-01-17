const orm = require('../../../../../conf/config-orm');
const user = require('./UserModel');

const tableName = 'session';

const SessionModel = orm.bookshelf.Model.extend({
  tableName: tableName,
  user: function () {
    return this.belongsTo(user.UserModel);
  }
});

const sessionSchema = (knex) => {
  return knex.schema
    .createTable(tableName, (table) => {
      table.increments();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('user_id').references('user.id');
    });
};

module.exports = {
  SessionModel,
  sessionSchema
};