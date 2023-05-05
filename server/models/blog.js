const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true
    },
    auth: {
        type: mongoose.Types.ObjectId,
        ref: "auth",
        require: true
    },
    
}, {timestamps: true});

module.exports = mongoose.model('post', postSchema);