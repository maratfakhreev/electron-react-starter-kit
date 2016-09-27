const pjson = require('../package.json');

module.exports = {
  version: pjson.version,
  apiPath: 'http://localhost:8080/v1',
  rootPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
