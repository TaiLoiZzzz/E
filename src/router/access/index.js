'use strict'

const express = require('express')
const router = express.Router()


//signup
router.post('/shop/signup',accessController.signUp)

module.exports = router

