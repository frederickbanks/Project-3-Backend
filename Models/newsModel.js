const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: String,
  paragraph: String,
  image: String,
  comments: [
    {
      User: String,
      paragraph: String
    }
  ]
});

module.exports = mongoose.model("News", NewsSchema);
