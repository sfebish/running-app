import Mocha from 'mocha';
import fs from 'fs';
import path from 'path';
import chai from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import * as hooks from '../test/hooks';
import _ from 'lodash';

sinon.test = sinonTest(sinon, { useFakeTimers: false });

// set a bunch of global variables to use in test files
global.chai = chai;
global.sinon = sinon;
global.assert = chai.assert;

// Create mocha instance to run the tests
const mocha = new Mocha({
    ui: 'tdd',
    reporter: 'nyan' // use 'spec' for jenkins
});

mocha.suite.beforeEach(hooks.setup);

// Start from the root directory and find all test files
const baseDir = path.join(__dirname, '../');
const testFiles = [];

findTestFiles(baseDir);

_.forEach(testFiles, file => mocha.addFile(file));

// start mocha
// if there are any failures, end the process
const runner = mocha.run(failures => {
    process.on('exit', () => process.exit(failures));
});

// when all tests are complete, end the process
runner.on('end', () => process.exit());

// recursive search for file names that end in test.js
function findTestFiles(dir) {
    if (dir.indexOf('\\Config') != -1 ||
        dir.indexOf('\\node_modules') != -1 ||
        dir.indexOf('\\app') != -1) {
        // ignore config and third party test files
        return;
    }

    const files = fs.readdirSync(dir);

    files.forEach(function (file) {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            findTestFiles(fullPath);
        } else {
            if (file.substr(-7).toLowerCase() === 'test.js')
                testFiles.push(fullPath);
        }
    });
};