const express = require('express');
const routes = require('./routes');
const { connectDatabase }= require('./models');
const dotenv = require('dotenv');

dotenv.config();
// const mongoose = require('mongoose');

// const connectDatabase = (url) =>{
//     mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     }).then(()=> console.log('DATABASE CONNECTED SUCCESSFULLY')).catch((err) => console.log(err));
// };

connectDatabase(process.env.DB_URL);

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 1408;

app.use(routes)

app.listen(PORT, console.log('app is listening at port: ', PORT));

