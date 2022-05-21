const express = require("express");
const adminRoutes = require('./routes/admin.router')
const bodyParser= require('body-parser')

const app = express();
const PORT = 3000
const cors = require('cors');
var admins = require('./database-mysql');

app.use(cors({origin:'*'}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(bodyParser.json({limit: '50mb'}));
app.use("/api/admins", adminRoutes);
 










app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
