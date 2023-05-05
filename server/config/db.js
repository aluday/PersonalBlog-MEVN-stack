const mongoose = require('mongoose');
//const url = 'mongodb://localhost:27017/blog';

async function connect(){
    try {          
        await mongoose.connect('mongodb://127.0.0.1:27017/Blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database sucessfully connected');
    } catch(error){
        console.log('Database failure connected');
    }
}

module.exports = { connect };