// this is a test



// require express, body-parser, cors
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const passport = require('./config/passport')()
//REQUIRE USER CONTROLLER
const userController = require('./Controllers/userController')
// require routes
const clothing = require('./Routes/clothingRoutes');
const news = require("./Routes/newsRoutes.js");

const app = express();
app.use(cors)


//body parser
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use("/api/clothing", clothing);
app.use("/api/news", news);

// USE PASSPORT
app.use(passport.initialize())

//USE USER CONTROLLER
app.use('/users', userController)

//local port
app.set("port", process.env.PORT || 4060);

//listen on port 4060
app.listen(app.get("port"), () => {
  console.log(`App active on port ${app.get("port")}`);
});
