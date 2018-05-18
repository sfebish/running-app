import mongoose from '../server/databaseConnection';

const schema = mongoose.Schema({
    distance: Number,
    time: Number, // save times in ms
    date: Date,
    isRace: Boolean
}, {
    timestamps: true  
});

export default mongoose.model('runs', schema);