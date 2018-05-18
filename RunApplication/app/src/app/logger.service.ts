import { Injectable } from '@angular/core';
import { EntityService} from './entity.service';

@Injectable()
export class LoggerService {

  constructor(private entityService: EntityService) { }

  // Logs a debug level message to the server
  // obj is optional
  debug(message, obj = null) {
    return this.logToServer('debug', message, obj);
  }

  // Logs an info level message to the server
  // obj is optional
  info(message, obj = null) {
    return this.logToServer('info', message, obj);
  }

  // Logs a warn level message to the server
  // obj is optional
  warn(message, obj = null) {
    return this.logToServer('warn', message, obj);
  }

  // Logs an error message to the server
  // obj is optional
  error(message, obj = null) {
    return this.logToServer('error', message, obj);
  }

  // Funciton to handle the work of sending the
  // log REST call to the server
  logToServer(level, message, obj) {
    const opts = {
      logLevel: level,
      message: message,
      logObj: obj
    }

    return this.entityService.post('logs', opts);
  }
}
