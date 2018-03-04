import log4js from 'log4js';
import path from 'path';

var logFile = path.join(__dirname, '../logs', 'runLog.log');

console.log('Configuring logging: ', logFile);

// Configure log4js to use a rolling date file.
// This log file will roll at the end of each day
log4js.configure({
    appenders: {
        file: { type: 'dateFile', filename: logFile, compress: true }
    },
    categories: {
        default: { appenders: ['file'], level: 'debug' }
    }
});

const logger = log4js.getLogger('customLogger');
logger.info(`logger configured at ${logFile}.`);

export default log4js;