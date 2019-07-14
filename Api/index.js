const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const auth = require('./controllers/auth.controller');
const conf = require('./config');
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//mongoDB connect
mongoose.connect(conf.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true });

//Server
app.use('/api', auth.tokenVerify, require('./routes/server'));

//Api run
app.listen(conf.PORT, () =>{
    console.log("Api running port:", conf.PORT);
});