const debug = require('debug')('src/app/routing');

API.get('/hello/:name', (req, res, next) => {
  res.send('hello ' + req.params.name);
  return next();
});