const config = require('./servers/web/config');

module.exports = {
  development: config.database,
  production: config.database,
};
