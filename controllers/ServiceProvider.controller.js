const {AddUser,selectLastUser,selectUserSP}=require('../database-mysql/ServiceProvider.js')
const ServiceProvider =require('../database-mysql/ServiceProvider.js') ;
const bcrypt = require("bcrypt")
const db = require('../database-mysql/')
   

    
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
    })},

  //get all SP for showing in home (from slim)
  selectAll:(req,res)=>{
    var sql='select * from sp'
    db.query(sql,function (err,result) {
      if(err)res.send(err)
      if(result)res.send(result)
    })

  },


  selectAllSPRoom : async function(req,res){
    selectUserSP((err, result) => {
        if (err) {
           console.log(err)
          }
         else {
          res.send({
            result,
            "code":200,
            "success":"select all sucessfully"
              });
           }
    });
  }



}



 



    

  