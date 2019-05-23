const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

//REQUIRE CONFIG FILE
const config = require('./config')

//require User model
const User = require('../Models/userModel')

const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function() {
    let strat = new Strategy(params, (payload, callback) => {
        let user = User.findById(payload.id) || null
        if(user) {
            return callback(null, {id: user.id})
        } else {
            return callback(new Error("Couldn't find User"), null)
        }
    })
    passport.use(strat)

    return {
        initialize: function () {
            return passport.initialize()
        },
        authenticate: function () {
            return passport.authenticate('jwt', {session: false})
        }
    }
}