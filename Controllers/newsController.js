const news = require("../Models/newsModel");

module.exports = {
  index: (req, res) => {
    news.find({}).then(results => {
      res.json(results);
    });
  },
  showNewsArticle: (req, res) => {
    let title = req.params.title;
    news.findOne({ title: title }).then(results => {
      res.json(results);
    });
  },
  

  
  
};
