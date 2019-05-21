const news = require('../Models/newsModel')

module.exports = {
    index: (req, res) => {
        news.find({}).then(results => {
          res.json(results);
        });
      },
        shhowNewsArticle: (req, res) => {
            let title = req.params.title
            coin.findOne({ "title": title }).then(results => {
              res.json(results);
            })
          },

        








}