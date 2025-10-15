'use strict'

const mongoose = require('mongoose')
const os  = require('os')
const process = require('process')
const countConnect = () =>{
    const numConnection = mongoose.connections.length

    console.log(`so truy cap la ${numConnection}`)

}

const checkOverload = () =>{
setInterval(()=>{
    const numConnection = mongoose.connections.length
    const numCores = os.cpus().length //core cpu
    const memoryUsage = process.memoryUsage().rss;
    //gia su maximun number of connections based on number ost cores 
    const maxConnections = numCores*5

    console.log(`So truy cap la ${numConnection} so luong cpu la ${numCores} so luong memory la ${memoryUsage/1024/1024} MB`)

},5*30*1000) //check mỗi 5 giây

}

module.exports = {countConnect
    ,checkOverload
}

