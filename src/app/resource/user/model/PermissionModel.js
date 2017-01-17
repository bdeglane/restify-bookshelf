const bookshelf = require('../../../../../conf/config-orm');
const role = require('./RoleModel');

const tableName = 'permission';

const PermissionModel = bookshelf.Model.extend({
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
  PermissionModel,
  permissionSchema
};