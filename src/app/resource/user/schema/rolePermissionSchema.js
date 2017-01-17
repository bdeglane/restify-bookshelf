const tableName = 'role_permission';

const rolePermissionSchema = (knex) => {
  return knex.schema
    .createTable(tableName, function (table) {
      table.integer('role_id').references('role.id');
      table.integer('permission_id').references('permission.id');
    })
};

module.exports = {
  tableName,
  rolePermissionSchema
};