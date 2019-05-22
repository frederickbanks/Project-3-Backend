const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')

//require config and passport
const passport = require('../config/passport')
const config = require('../config/config')

const User = require('../Models/userModel')





module.exports = router