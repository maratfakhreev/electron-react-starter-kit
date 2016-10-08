const fs = require('fs');
const config = require('../config/application');

const stream = fs.createWriteStream('built/version.json');

stream.once('open', () => {
  stream.write(`{ "version": "${config.version}" }`);
  stream.end();
});
