const {AddUser,selectLastUser,selectUserSP,getAllEmails}=require('../database-mysql/ServiceProvider.js')
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
  },

  login:async function (req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send("Please fill all the fields");
    } else {
      getAllEmails(email, (err, results) => {
        if (err) {
          return res.status(200).send(err);
        }
       else if (results.length  === 0) {
          return res.send("email not found");
        } else {
          try {
            bcrypt.compare(
              password,
              results[0].password,
              function (err, result) {
                if (err) {
                  res.send(err);
                }
                if (result === false) {
                  res.send("login failed");
                }
                if (result === true) {
                  res.send(results[0])
                }
              }
            );
          } catch (err) {
            res.send(err);
          }
        }
      });
    }
  },
  selectOne:(req,res)=>{
    var id = req.params.id;
    sql='select * from sp where id=?'
    db.query(sql,id,(err, results)=>{
      if (err)res.send(err);
      if (results)res.send(results);
    })

  },
  update:(req,res)=>{
    var x=req.body
    var id=x.id;
    var pr=x.professional_name
    var email=x.email
    var des=x.description
    var tel=x.tel
    var pack=x.pack_price
    var img=x.image
    db.query(`update sp set professional_name='${pr}',email='${email}',description='${des}',tel='${tel}',pack_price='${pack}',logo='${img}' where id=${id}`,(err, result)=>{
      if (err)res.send(err)
      if(result)res.send(result)
    })
  },
  updateMap:(req,res)=>{
    var latitude=req.body.latitude
    var longitude=req.body.longitude
    var id=req.body.id
    const sql="UPDATE sp SET   sp.latitude = ?, sp.longitude = ? WHERE sp.id = ?";
          db.query(sql,[latitude,longitude ,id ], (err,result)=>{
              if (err)res.send(err)
              if(result)res.send(result)
  })
  }
}



 



    

  