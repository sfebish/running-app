require('babel-register')({
    presets: ['env'],
    cache: false
});

require('./server.js');