// this is a test
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet');
const morgan = require('morgan')
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const app = express()

//Require Controllers will go here

//body parser
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

//USE HELMET
app.use(helmet())
// Log http Requests with morgan
app.use(morgan('combined'))

//Use of Controllers go here



const checkToken = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: ``
    }),
     audience: 'k5CXT5TwLiD3T1xmoRjLQy8yG6aVxFEL',
     issuer: `https://dropz.auth0.com/`,
     algorithms: ['RS256']
})


//local port
app.set('port', process.env.PORT || 4060)

//listen on port 4060
app.listen(app.get('port'), () => {
    console.log(`App active on port ${app.get('port')}`)
})
