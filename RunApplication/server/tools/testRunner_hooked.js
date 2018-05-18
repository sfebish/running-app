process.env.NODE_ENV = 'test';

// Setup babel to build es6 code
require('babel-register')({
    presets: ['env']
});

// Start up express server as a prereq to all the tests
require('../server.js');

// Give the server time to start up before initializing tests
setTimeout(function() {
    require('./testRunner.js');
}, 1000);
