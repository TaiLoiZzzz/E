const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const coutConnect = require('./helpers/check.connect');
require('dotenv').config()
const app = express()


//init middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(compression()); 
//init db
require('./db/init.mongodb')
const check  = require('./helpers/check.connect')
check.checkOverload()


app.use("/",require("./router"))//handeleror

module.exports = app