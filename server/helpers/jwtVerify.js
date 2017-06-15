const jwt = require('jsonwebtoken')

module.exports = {
  jwtVerify: (req, res, next) => {
    jwt.verify(req.headers.token, 'secretnya jangan lupa', function (err, decoded) {
      if (err) {
        res.send(err)
      }else {
        if (decoded) {
          req.decoded = decoded
          next()
        }else {
          res.send({
            msg: 'You Can not Access this Routes'
          })
        }
      }
    })
  }
}
