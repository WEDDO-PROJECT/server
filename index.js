const express = require("express");
const bodyParser = require("body-parser");
const SPRoutes =require('./routes/SPRouter')
const userRoutes= require('./routes/user.routes')
const app = express();
const PORT =  3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use(bodyParser.json({limit: '50mb'}));


app.use("/api/sp", SPRoutes);
app.use("/api/user", userRoutes);
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
