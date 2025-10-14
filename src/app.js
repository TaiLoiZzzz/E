const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express()

//init middlexwares
app.use(morgan('dev'));
app.use(helmet());

//init db

//init route
app.get('/', (req,res,next) =>{
    return res.status(200).json({
        message: "Helo World   "
    })
})
//handeleror

module.exports = app