import mongoose from 'mongoose';
import { getValue } from '../config/configuration.manager';

const dbServer = getValue('databaseServer');
const dbName = getValue('databaseName');

// Use the native ES6 promise instead of mongoose call backs
// This makes the code more readable
mongoose.Promise = Promise;
mongoose.connect(`mongodb://${dbServer}/${dbName}`);

var db = mongoose.connection;
db.on('error', (error) => console.error(error));

export default mongoose;