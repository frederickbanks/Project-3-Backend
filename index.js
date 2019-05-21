// this is a test
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()

//Require Controllers will go here

//body parser
app.use(parser.urlencoded({extended: true}));
app.use(parser.json())

//Use of Controllers go here


//local port
app.set('port', process.env.PORT || 4060)

//listen on port 4060
app.listen(app.get('port'), () => {
    console.log(`App active on port ${app.get('port')}`)
})
