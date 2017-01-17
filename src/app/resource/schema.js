'use strict';
// import orm
const orm = require('../../../../../conf/config-orm');
// import all table
const user = require('./user/model/UserModel');
const role = require('./user/model/RoleModel');
const session = require('./user/model/SessionModel');
const permission = require('./user/model/PermissionModel');
const rolePermission = require('./user/model/rolePermission');

// export the script to create the the database
const createSchema = (knex, callback) => {
  callback = callback || function () {
    };
  knex.schema
  // drop table user, role, session, permission if exist
    .dropTableIfExists(session.tableName)
    .dropTableIfExists(user.tableName)
    .dropTableIfExists(role_permission.tableName)
    .dropTableIfExists(permission.tableName)
    .dropTableIfExists(role.tableName)
    // then recreate it
    .then(() => role.roleSchema(knex))
    .then(() => user.userSchema(knex))
    .then(() => session.sessionSchema(knex))
    .then(() => permission.permissionSchema(knex))
    .then(() => rolePermission.rolePermissionSchema(knex))
    .then(() => {
      logger.info('Database schema have been updated');
      callback();
      return null;
    })
    .catch((err) => {
      logger.error('Create schema error: %s', err.toString());
      callback(err);
    });
};

module.exports = {
  createSchema
};