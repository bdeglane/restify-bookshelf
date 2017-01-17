const logger = require('winston');

const role = require('../schema/RoleSchema');
const permission = require('../schema/PermissionSchema');
const user = require('../schema/UserSchema');


const seed = () => {
  return Promise
    .all([
      new role.RoleModel({name: 'ADMIN'}).save().then((model) => {
        // console.log(model);
      }),
      new permission.PermissionModel({name: 'ALL'}).save().then((model) => {
        // console.log(model);
      })
    ])
    .then(() => {
      return new user.UserModel({
        name: 'test',
        login: 'test@test.test',
        password: 'test',
        role_id: 1
      }).save().then((model) => {
        // console.log(model);
      })
    })
    .then(() => {
      logger.info('seeded for packages user');
      process.exit(0);
    })
    .catch((e) => {
      logger.log(e);
      process.exit(1);
    });
};

module.exports = {
  seed
};