import fs from 'fs';
import path from 'path';
import { Config as defaultConfig } from './config';
import { ConfigTest as testConfig } from './config';

let overrideExists = false;
const isTest = process.env.NODE_ENV == 'test';

try {
    const fileName = path.join(__dirname, 'config.overrides.js');
    fs.accessSync(fileName);
    console.log('config file exists');
    overrideExists = true;
} catch (err) {
    console.log('config file doesn\'t exist');
    overrideExists = false;
}

let config;

if (isTest) {
    config = new testConfig();
} else if (overrideExists) {
    config = require('./config.overrides');
} else {
    config = new defaultConfig();
}

//const config = new Config();

export const getValue = paramName => {
    return config.getValue(paramName);
}