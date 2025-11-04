'use strict'

const express = require('express')
const { model } = require('mongoose')

const router = express.Router()


router.use('/v1/api',require('./access'))


module.exports = router

