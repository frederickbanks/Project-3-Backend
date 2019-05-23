const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')

//require config and passport
const passport = require('../config/passport')
const config = require('../config/config')

const User = require('../Models/userModel')

//SIGNUP POST REQUEST (create token for when user signs up)
router.get('/', (req, res) => {
  User.find({}).then(results => {
    res.json(results)
  })
})

router.post('/signup', (req,res) => {
    // if there is a email and passord set values
    if(req.body.email && req.body.password){
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({username: req.body.username})
        .then((user) => {
            //if user doesn't exist create a new user
            if(!user) {
                User.create(newUser)
                .then(user => {
                    if(user) {
                        var payload = {
                            id: newUser.id
                        }
                        var token = jwt.encode(payload, config.jwtSecret)
                        res.json({
                            token: token
                        })
                    } else{
                        res.sendStatus(401)
                    }
                })
            } else {
                res.sendStatus(401)
            }
        })
    } else {
        res.sendStatus(401)
    }
})


//USER LOGIN(CREATE TOKEN FOR USER LOGIN)
router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email }).then(user => {
        if (user) {
          if (user.password === req.body.password) {
            var payload = {
              id: user.id
            }
            var token = jwt.encode(payload, config.jwtSecret)
            res.json({
              token: token
            })
          } else {
            res.sendStatus(401)
          }
        } else {
          res.sendStatus(401)
        }
      })
    } else {
      res.sendStatus(401)
    }
  }),




module.exports = router