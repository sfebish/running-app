import mongoose from '../server/databaseConnection';
import passportLocalMongoose from 'passport-local-mongoose';

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    birthdate: Date,
    permissions: { type: Array, default: [] }
}, {
    timestamps: true
});

const passportOpts = {
    usernameField: 'email',
    populateFields: ['email']
}

schema.plugin(passportLocalMongoose, passportOpts);

export default mongoose.model('users', schema);