const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    habitId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    logTime: {
        type: Date,
        required: true
    },
    date: { 
        type: Date,
        default: Date.now
    }
});

module.exports = Log = mongoose.model('log', LogSchema);