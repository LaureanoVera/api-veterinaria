const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// SERVER LISTENING
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
})