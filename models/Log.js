const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    description: {
        type: String,
        required: false
    },
    date: { 
        type: Date,
        default: Date.now
    }
});

module.exports = Log = mongoose.model('log', LogSchema);