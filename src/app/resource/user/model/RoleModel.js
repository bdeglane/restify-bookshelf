const orm = require('../../../../../conf/config-orm');
const user = require('./UserModel');
const permission = require('./PermissionModel');

const tableName = 'role';

const RoleModel = orm.bookshelf.Model.extend({
  tableName: tableName,
  user: function () {
    return this.hasOne(user.UserModel);
  },
  permission: function () {
    return this.belongsToMany(permission.PermissionModel);
  }
});

const roleSchema = (knex) => {
  return knex.schema
    .createTable(tableName, (table) => {
      table.increments();
      table.string('name');
    });
};

module.exports = {
  tableName,
  RoleModel,
  roleSchema
};