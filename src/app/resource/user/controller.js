'use strict';
const debug = require('debug')('src/app/resource/user/controller');


const getUser = (req, res, next) => {
  res.send('hello ' + req.params.name);
  return next();
};

module.exports = {
  getUser
};