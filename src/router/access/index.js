'use strict'

const express = require('express')
const router = express.Router()
const accessController = require('../../controllers/access.controller')

//signup
router.post('/shop/signup',accessController.signUp)
router.get('',(req,res,next) =>{
    return res.status(200).json({
        code:'2001',
        metadata:{userid:1},
        message:'Signup success'
    })})
module.exports = router

