import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rundb');

var db = mongoose.connection;
db.on('error', (error) => console.error(error));

export default mongoose;