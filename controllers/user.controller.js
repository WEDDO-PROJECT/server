var db = require("../database-mysql");

var userSignIn=(req,res)=>{
    const email=req.body.email
const password=req.body.password
const sqlSel=`SELECT * FROM user WHERE  email=? AND password=? `
db.query(sqlSel,[email,password],(err,result)=>{
    if(err){
        res.send(["err",err])
    }
    if(result.length>0){
        res.send(["succesfully connected",result])
    }else{
        res.send(["Login faild"])
    }
})
}
var userSignUp=(req, res)=> {
    console.log('hello');
     const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const confirme_Password = req.body.confirme_Password;
  const tel_number = req.body.tel_number;

  const sql =
    "INSERT INTO `user` (`name`, `email`, `password`,`confirme_Password`,`tel_number`) VALUES (?, ?, ?,?, ?);";
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
            res.send("user is not added!!!");
          } else {
            res.send({message:"Registered successfully !!!"});
          }
        });
      }
    }
  });

    }
module.exports={userSignIn,userSignUp}