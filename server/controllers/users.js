const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  signup: (req, res) => {
    User.findOne({username: req.body.username})
      .then(result => {
        console.log(result)
        if (result == null) {
          var signupUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
          })

          signupUser.save((err, response) => {
            if (err) {
              res.send(err)
            }else {
              res.send(response)
            }
          })
        }else {
          res.send({msg: 'Username already exists'})
        }
      })
      .catch(err => {
        res.send(err)
      })
  },
  signin: (req, res) => {
    User.findOne({username: req.body.username})
      .then(result => {
        if (result != null) {
          if (bcrypt.compareSync(req.body.password, result.password)) {
            var token = jwt.sign({
              id: result._id,
              name: result.name,
              username: result.username
            }, 'secretnya jangan lupa')
            res.send({
              token: token
            })
          }else {
            res.send({
              msg: 'Password is Wrong'
            })
          }
        }else {
          res.send({
            msg: 'Username not match'
          })
        }
      })
      .catch(err => {
        res.send(err)
      })
  }
}
