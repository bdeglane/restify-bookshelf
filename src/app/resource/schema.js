'use strict';
const logger = require('winston');
// import orm
const orm = require('../../../conf/config-orm');
// import all tables
const user = require('./user/schema/UserSchema');
const role = require('./user/schema/RoleSchema');
const session = require('./user/schema/SessionSchema');
const permission = require('./user/schema/PermissionSchema');
const rolePermission = require('./user/schema/rolePermissionSchema');

// import all seed
const userSeed = require('./user/config/seed');

// export the script to create the the database
const createSchema = (knex, callback) => {
  callback = callback || function () {
    };
  knex.schema
  // drop table user, role, session, permission if exist
    .dropTableIfExists(session.tableName)
    .dropTableIfExists(user.tableName)
    .dropTableIfExists(rolePermission.tableName)
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
      userSeed.seed();
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