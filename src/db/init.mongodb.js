'use strict'
const mongoose = require('mongoose');
const{db:{host, name, port}} = require('../configs/config.mongodb')
const connectString = `mongodb://${host}:${port}/${name}`;

const checkCount  = require('../helpers/check.connect')


// Singleton Design dùng để gọi chỉ 1 lần  không làm tốn tài nguyên 
class Database{

    constructor(){
        this.connect()
    }

   

    connect(type = 'mongodb'){
        if ( 1 == 1){ //nếu ko cần debug thì chỉ cần chuyển 1 == 0 là được 
            mongoose.set('debug', true) //còn này thì là debug mod
            mongoose.set('debug',{color : true} ) //thêm màu sắc cho debug
        }
        mongoose.connect( connectString, {    //PoolSize cho 50 pool cho mỗi client 
            maxPoolSize : 50
        }).then(_ => {
            console.log(`Connected to MongoDB ${connectString}`)
            checkCount.countConnect()
        }).catch(err => console.log('Error connecting to MongoDB', err))
    }

    static getInstance(){
        if (!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
     
}
const instanceMongoDb = Database.getInstance()

module.exports = mongoose