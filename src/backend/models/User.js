const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name : {type: 'string', required: true},
    email : {type: 'string', required: true},
    password : {type: 'string', required: true},
    score:{type: 'number',required: true, default: 0},
    noOfSubmission: {type: 'number', required: false, default: 0},
    submitted: {type: 'Array', required: false}
});

module.exports = mongoose.model('User', UserSchema);