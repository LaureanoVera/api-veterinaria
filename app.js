const express = require("express");
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes/index')
const bodyParser = require('body-parser')

// CONECT TO MONGODB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// BODY-PARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// ROUTES
app.use('/', routes())

// SERVER LISTENING
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
})