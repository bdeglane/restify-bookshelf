const orm = require('../../../../../conf/config-orm');
const role = require('./RoleModel');
const session = require('./SessionModel');

const tableName = 'user';

const UserModel = orm.bookshelf.Model.extend({
  tableName: tableName,
  role: function () {
    return this.belongsTo(role.RoleModel);
  },
  session: function () {
    return this.hasOne(session.SessionModel);
  }
});

const userSchema = (knex) => {
  return knex.schema
    .createTable(tableName, (table) => {
      table.increments();
      table.string('name');
      table.string('login', 128).index();
      table.string('password');
      table.integer('role_id').unique().references('role.id');
      table.timestamps(true, true);
    });
};

module.exports = {
  tableName,
  UserModel,
  userSchema
};