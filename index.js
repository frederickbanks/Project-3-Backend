// this is a test


// require express, body-parser, cors
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
// require routes
const clothing = require('./Routes/clothingRoutes');
const news = require("./Routes/newsRoutes.js");
const app = express();

//body parser
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use("/api/clothing", clothing);
app.use("/api/news", news);

// USE PASSPORT
app.use(passport.initialize())

//local port
app.set("port", process.env.PORT || 4060);

//listen on port 4060
app.listen(app.get("port"), () => {
  console.log(`App active on port ${app.get("port")}`);
});
