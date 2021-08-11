const express = require("express");
const mongoose = require('mongoose')
const app = express();

// CONECT TO MONGODB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// SERVER LISTENING
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
})