const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true 
});

module.exports = Habit = mongoose.model('habit', HabitSchema);

