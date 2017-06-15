const Article = require('../models/articles')

module.exports = {
  getAll: (req, res) => {
    Article.find({})
      .populate('author')
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        res.send(err)
      })
  },
  create: (req, res) => {
    var newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.decoded._id
    })

    newArticle.save((err, result) => {
      if (err) {
        res.send(err)
      }else {
        res.send({
          msg: 'Article has been added',
          result: result
        })
      }
    })
  },
  update: (req, res) => {
    Article.update({_id: req.params.id}, {
      $set: req.body
    }, (err, result) => {
      if (err) {
        res.send(err)
      }else {
        res.send({
          msg: 'Article has been updated',
          result: result
        })
      }
    })
  },
  delete: (req, res) => {
    Article.remove({_id: req.params.id}, (err, result) => {
      if (err) {
        res.send(err)
      }else {
        res.send({
          msg: 'Article has deleted',
          result: result
        })
      }
    })
  }
}
