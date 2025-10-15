'use strict'
require('dotenv').config()

const dev = {
    app: {
        port:process.env.DEV_APP_PORT
    },
    db: {
        host:process.env.DEV_DB_HOST,
        port:'27017',
        name:process.env.DEV_DB_NAME

    }
}


const pro = {
    app: {
       port:process.env.PRO_APP_PORT
    },
    db: {
        host:process.env.PRO_DB_HOST,
        port:'27017',
        name:'pro'

    }
}
const config = {dev, pro}
const env = process.env.NODE_ENV || dev
module.exports=config[env]
