const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const coutConnect = require('./helpers/check.connect');
const app = express()



//init middlexwares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression()); 
//init db
require('./db/init.mongodb')



//init route
app.get('/', (req,res,next) =>{
    return res.status(200).json({
        message: "Helo World   "
    })
})
//handeleror

module.exports = app