const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')

//require config and passport
const passport = require('../config/passport')
const config = require('../config/config')

const User = require('../Models/userModel')

//SIGNUP POST REQUEST (create token for when user signs up)
router.get('/', (req, res) => {
  User.find({}).populate("favorites").then(results => {
    res.json(results)
  })
})

router.post('/signup', (req, res) => {
  // if there is a email and passord set values
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ email: req.body.email })
      .then((user) => {
        //if user doesn't exist create a new user
        if (!user) {
          User.create(newUser)
            .then(user => {
              // KIRRAN: Changed newUser.id to user._id in the payload
              if (user) {
                var payload = {
                  id: user._id
                }
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                  token: token
                })
              } else {
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

  // add a new favorite clothing to the user
  router.put('/favorites', (req, res) => {
    console.log("body", req.body)
    const user = jwt.decode(req.body.token, config.jwtSecret)
    User.findOne({ _id: user.id })
      .then(user => {
        user.favorites.push(req.body.clothingId)
        user.save()
          .then(updatedUser => {
            res.json(updatedUser)
          })
      })
  })

router.get('/id/:token', (req, res) => {
  const user = jwt.decode(req.params.token, config.jwtSecret)
  User.findOne({ _id: user.id }).populate('favorites')
    .then(user => res.json(user))
})

module.exports = router