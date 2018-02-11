import mongoose from '../server/databaseConnection';
import passportLocalMongoose from 'passport-local-mongoose';

var schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    firstName: String,
    lastName: String,
    birthdate: Date,
    permissions: []
});

var passportOpts = {
    usernameField: 'email',
    populateFields: ['email']
}

schema.plugin(passportLocalMongoose, passportOpts);

export default mongoose.model('users', schema);