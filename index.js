const express = require("express");
var db = require("./database-mysql/index.js");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use(bodyParser.json({limit: '50mb'}));

const SPRoutes =require('./routes/SPRouter')

app.use("/api/sp", SPRoutes);

const db = require('./database-mysql')






app.use(bodyParser.json({ limit: "50mb" }));
app.post("/register", function (req, res) {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const confirme_Password = req.body.confirme_Password;
  const tel_number = req.body.tel_number;

  const sql =
    "INSERT INTO `user` (`name`, `email`, `password`,`confirme_Password`,`tel_number`) VALUES (?, ?, ?, ?);";
  const checkE = "SELECT `email` FROM weddo.`user` where `email` = ?;";
  db.query(checkE, [email], (err, result) => {
    if (err) {
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        res.send({
          message: "User already have an accout assigned to this Email!!!",
        });
      } else {
        db.query(sql, [name, email, password,confirme_Password, tel_number], (err, result) => {
          if (err) {
            console.log("user is not added!!!");
          } else {
            res.send(result);
            console.log("Registered successfully !!!");
          }
        });
      }
    }
  });
});

app.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const sql2 = "select * from `user` where `email` = ? AND `password` = ?;";
  db.query(sql2, [email, password], (err, result) => {
    if (err) {
      res.send({ err: err });
      console.log("user not found!!");
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});
app.post("/ForgotPassword",(req,res)=>{
  const email = req.body.email;
const sql3 = "select * from `user` where `email` = ?";
db.query(sql3,[email],(err,res)=>{
  if(err) {
    res.send()
  }
})
})

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
