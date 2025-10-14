'use strict'
const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/`;

mongoose.connect(connectString).then(() => console.log('Connected to MongoDB')).catch(err => console.log('Error connecting to MongoDB', err));