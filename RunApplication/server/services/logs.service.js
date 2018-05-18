import { handleSuccess, handleError } from './express.helpers';
import customLogger from '../server/customLogger';

// Takes an incoming log request from the client and
// logs it to both file and the console.
// If the message is of error level,
// the console log is also an error message, otherwise 
// the console log is a standard message
export const logToServer = (req, res) => {
    const level = req.body.logLevel;
    const message = req.body.message;
    const logObj = req.body.logObj;

    try {
        customLogger[level](message, logObj);

        if (level == 'error') {
            console.error(message, logObj);
        } else {
            console.log(message, logObj);
        }

        handleSuccess.call(res, true);
    } catch (e) {
        handleError.call(res, e);
    }
}