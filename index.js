// this is a test
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

const app = express()

//Require Controllers will go here
const userController = require('./controllers/userController')

//body parser
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

// USE PASSPORT
app.use(passport.initialize())

// USE CONTROLLERS
app.use('/user', userController)


//local port
app.set('port', process.env.PORT || 4060)

//listen on port 4060
app.listen(app.get('port'), () => {
    console.log(`App active on port ${app.get('port')}`)
})
