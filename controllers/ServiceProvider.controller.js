const {AddUser,selectLastUser,selectUserSP}=require('../database-mysql/ServiceProvider.js')
const ServiceProvider =require('../database-mysql/ServiceProvider.js') ;
const bcrypt = require("bcrypt")
   const db=require("../database-mysql/index")  
module.exports = { 
   AuthWithPhone :(req,res)=>{
    const accountSid = "ACb943fb1dce70e11a65c5003f1eba8721";
    const authToken = "38883ffb45826b31dfeadf299a728d61";
    const client = require('twilio')(accountSid, authToken);

    var min = 100;
    var max = 999;
    var num = Math.floor(Math.random() * min)+ max;

    client.messages
    .create({
        body: 'you verification code is : '+num,
        from: '+13022098637',
        to: '+21655004732'
    })
    .then(message => res.send(message.sid));
    
},


Register: async function(req,res){
  
  console.log(req.body)
  //console.log(req.body)
  const password = req.body.password;
  const saltRounds=bcrypt.genSaltSync(10)
  const encryptedPassword = await bcrypt.hash(password, saltRounds)
  //console.log(encryptedPassword)
  req.body.password=encryptedPassword
 // console.log(req.body)
  const sql ="INSERT INTO sp SET ?"
  db.query(sql,req.body,(err,results)=>{
    if (err){
      res.send({
        "code":400,
        err:err
      })
    }
    else {
      selectLastUser((err, result) => {
        if (err) {
          console.log(err)
        }
        else {
          res.send({
            result,
            "code":200,
            "success":"user registered sucessfully"
              });
        }
      })
      
      }
  })
},

login : function (req, res, next)  {

  var params = {
      email: req.body.email,
      password: req.body.password
  }
  sql = 'SELECT * FROM sp WHERE email =?'
  db.query(sql, [req.body.email], (err, result) => { // user does not exists
      if (err) {
          res.send(err);
      } else {
          if (!result.length) {
              res.send("Email or password is incorrect!");
          } else {
              bcrypt.compare(params.password, result[0]["password"], (bErr, bResult) => { // wrong password
                      if (bResult) {
                          res.send(result[0]);
                      } else {
                          res.send("Email or password is incorrect!");
                      }
              })
          }
      }

  });

    },
    getSpInfo :function (req, res){ // const id=req.params.id
      console.log(req.params.id)
      const userInfo =`SELECT * FROM sp WHERE id= ${req.params[`id`]}` ;
    
          db.query(userInfo, (err, data) => {
              if (err) {
                  res.send(err);
                  console.log(err)
              } else {
                  res.send(data);
              }
          });
        }
      }
  
    

  //get all SP for showing in home (from slim)
  selectAll:(req,res)=>{
    var sql='select * from sp'
    db.query(sql,function (err,result) {
      if(err)res.send(err)
      if(result)res.send(result)
    })
  }
  



//   Register :function (req, res) {
//     console.log(req.body)
//     AddUser(req.body, (err, results) => {
//         if (err) {
//           console.log(err)
//             res.status(500).send(err);
//         }
//         else {
//             res.status(201).json(results);
//         }
//     })
// },

//   app.post("/login", function (req, res) {
    //     const email = req.body.email;
    //     const password = req.body.password;
      
    //     const sql2 = "select * from `user` where `email` = ? AND `password` = ?;";
    //     db.query(sql2, [email, password], (err, result) => {
    //       if (err) {
    //         res.send({ err: err });
    //         console.log("user not found!!");
    //       }
    //       if (result.length > 0) {
    //         res.send(result);
    //       } else {
    //         res.send({ message: "Wrong username/password combination!" });
    //       }
    //     });
    //   });
    //   app.post("/ForgotPassword",(req,res)=>{
    //     const email = req.body.email;
    //   const sql3 = "select * from `user` where `email` = ?";
    //   db.query(sql3,[email],(err,res)=>{
    //     if(err) {
    //       res.send()
    //     }
    //   })
    //   })




  // selectAllSPRoom : async function(req,res){
  //   selectUserSP((err, result) => {
  //       if (err) {
  //          console.log(err)
  //         }
  //        else {
  //         res.send({
  //           result,
  //           "code":200,
  //           "success":"select all sucessfully"
  //             });
  //          }
  //   });
  // }







 



    

  