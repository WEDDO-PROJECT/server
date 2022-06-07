const {AddUser,selectLastUser,selectUserSP,getAllEmails, updatePriceSP , getSp,updateMapSP}=require('../database-mysql/ServiceProvider.js')
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
  updatePrice:async function (req, res) {
    const { id, pack_price } = req.body; 
    if (!id || !pack_price) {
      return res.send("Please fill all the fields");
    } else {
      console.log(id, pack_price)
      updatePriceSP(id,pack_price, (err, results) => {
        if (err) {
          console.log(err)
          return res.status(200).send(err);
        } else {
          res.send(results);
          console.log(results)
        }
      });
    }
  },
  updateSalle:async function (req, res) {
    const {id,  price,name ,longitude ,latitude } = req.body; 
    if (!name || !price) {
      return res.send("Please fill all the fields");
    } else {
      console.log(price,name ,longitude ,latitude,id)
      updateMapSP(id,price,name ,longitude ,latitude, (err, results) => {
        if (err) {
          console.log(err)
          return res.status(200).send(err);
        } else {
          getSp(id , (err, result) => {
            if (err) {  
              console.log(err)
            }
            else {
              res.send({
                result,
                "code":200,
                "success":"salle registered sucessfully"
                  });
            }
          })
        }
      });
    }
  },
  createRating:(req,res)=>{

    const sql ="INSERT INTO rating SET ?"
        db.query(sql,req.body,(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){res.send(result)}
        
    })
    },
    createRequest:(req,res)=>{

      const sql ="INSERT INTO chosenservices SET ?"
          db.query(sql,req.body,(err,result)=>{
          if(err){
              res.send(err)
          }
          if(result){res.send(result)}
          
      })
      },
      getAll:(req,res)=>{
        const sql ="select * from sp s inner join chosenservices c on c.sp_id=s.id  where c.user_id=109 "
        db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){res.send(result)}
        
    })
    },
    deleteRequest:(req,res)=>{
      var sql ='delete from chosenservices where user_id=? and sp_id=?'
      console.log(req.body);
      db.query(sql,[req.body.user_id,req.body.sp_id],(err,result)=>{
          if(err){res.send(err)}
          if(result){res.send(result)}
      })
  },
  selectOne:(req,res)=>{
    var id = req.params.id;
    sql='select * from sp where id=?'
    db.query(sql,id,(err, results)=>{
      if (err)res.send(err);
      if (results)res.send(results);
    })

  }
}



 



    

  