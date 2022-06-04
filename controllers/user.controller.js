const {AddUser,selectLastUser,selectUserSP,getAllEmails,getPasswordByEmail}=require('../database-mysql/user.js')
const user =require('../database-mysql/user') ;
const bcrypt = require("bcrypt")
const db = require('../database-mysql/')
   

      
module.exports={

  Register: async function(req,res){
    console.log(req.body)
    const password = req.body.password;
    const saltRounds=bcrypt.genSaltSync(10)
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    //console.log(encryptedPassword)
    req.body.password=encryptedPassword
    console.log(req.body)
    const sql ="INSERT INTO user SET ?"
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
    



    login:async function (req, res) {
      console.log('login')
      const { email, password } = req.body;
      if (!email || !password) {
        return res.send(["Please fill all the fields"]);
      } else {
        getAllEmails(email, (err, results) => {
          if (err) {
            return res.status(200).send([err]);
          }
         else if (results.length  === 0) {
            return res.send(["email not found"]);
          } else {
            try {
              bcrypt.compare(
                password,
                results[0].password,
                function (err, result) {
                  if (err) {
                    res.send(['err',err]);
                  }
                  if (result === false) {
                    res.send(["login failed"]);
                  }
                  if (result === true) {
                    res.send(['success',results[0]])
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

}




// getRole(email, (err, result) => {
//   if (err) {
//     return res.send(err);
//   }
//  else if (result[0].role === "help_seekers") {

//       getAllEmails(email,async (err, results)=>{
//       if(err){res.send(err);}
//       else{
//         const user ={
//           email:results[0].email,
//           name:results[0].name,
//        }
//          jwt.sign(
//          { user },
//          process.env.JWT_SECRET_KEY,
//          (err, token) => {
//            if (err) {
//              return res.send(err);
//            }else{
//             res.send({token:token,msg:' hi help seekers'});
//            }
//          }
//        );
//       }
//     })
//   }else if (result[0].role ===  "help_givers") {
//     console.log('first')
//     getAllEmails(email, (err, results)=>{
//       if(err){res.send(err);}
//       else{
//         const user ={
//           email:results[0].email,
//           name:results[0].first_name,
//           photo:results[0].photo
//        }
//       console.log(user)
//        jwt.sign(
//         { user },
//         process.env.JWT_SECRET_KEY,
//         (err, token) => {
//           if (err) {
//              res.send(err);
//           }else{
//             console.log('third')
//             res.send({token:token,msg:'hi help giver'});
//           }
//           console.log("fourth")
//         }
//       );
//       }
//     })
//   }else{
//       res.send('login successful')
//   }
// });