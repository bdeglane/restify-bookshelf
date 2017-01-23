const debug = require('debug')('src/app/resource/user/routing');
const controller = require('./controller');

const PATH = '/hello/:name';

API.get(PATH, controller.getUser);