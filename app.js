const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cors = require("cors");

// CORSE
const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    const existe = whiteList.some((dominio) => dominio === origin);
    if (existe) {
      callback(null, true);
    } else {
      callback(new Error("No Permitido por CORS"));
    }
  },
};

// app.use(cors(corsOptions));
app.use(cors());

// CONECT TO MONGODB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/", routes());

// SERVER LISTENING
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
