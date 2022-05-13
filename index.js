const express = require("express");

const bodyParser= require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(bodyParser.json({limit: '50mb'}));











app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
