const mongoose = require('mongoose');
const Note = require('./note.model');
const connectDatabase = (url) =>{
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=> console.log('DATABASE CONNECTED SUCCESSFULLY')).catch((err) => console.log(err));
};

module.exports = {
    connectDatabase,
    Note,
}