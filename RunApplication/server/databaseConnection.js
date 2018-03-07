import mongoose from 'mongoose';

// Use the native ES6 promise instead of mongoose call backs
// This makes the code more readable
mongoose.Promise = Promise;

const opts = {
  useMongoClient: true,
  promiseLibrary: global.Promise;
}

mongoose.connect('mongodb://localhost/rundb', opts);

var db = mongoose.connection;
db.on('error', (error) => console.error(error));

export default mongoose;
