import mongoose from 'mongoose';

// Use the native ES6 promise instead of mongoose call backs
// This makes the code more readable
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/rundb');

var db = mongoose.connection;
db.on('error', (error) => console.error(error));

export default mongoose;