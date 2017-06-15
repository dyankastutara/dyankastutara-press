const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost/dyankastutara-press', () => {
  console.log('connect to db mongodb://localhost/dyankastutara-press')
})
const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(app.get('port'), () => {
  console.log('Connected to port ' + app.get('port'))
})