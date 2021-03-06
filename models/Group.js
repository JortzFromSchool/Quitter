const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    users: [{type: Object}],
    habitId: {
      type: String,
      required: true
    },
    admin: {
      type: String,
      required: true
    } 
}, {
    timestamps: true 
});

module.exports = Group = mongoose.model('group', GroupSchema);