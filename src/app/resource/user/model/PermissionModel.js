const orm = require('../../../../../conf/config-orm');
const role = require('./RoleModel');

const tableName = 'permission';

const PermissionModel = orm.bookshelf.Model.extend({
  tableName: tableName,
  role: function () {
    return this.belongsToMany(role.RoleModel);
  }
});

const permissionSchema = (knex) => {
  return knex.schema
    .createTable(tableName, (table) => {
      table.increments();
      table.string('name');
    });
};

module.exports = {
  tableName,
  PermissionModel,
  permissionSchema
};