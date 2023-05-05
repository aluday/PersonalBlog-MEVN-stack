const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: Number,
        require: true
    },
    blogs: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'post', 
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model('auth', authSchema);