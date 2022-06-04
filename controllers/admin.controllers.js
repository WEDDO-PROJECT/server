var db = require("../database-mysql");

// const bcrypt = require("bcrypt")

var selectAllsp = function (req, res) {
    db.query("SELECT owner_name FROM weddo.sp", (err, items, fields) => {


var selectAllsp = function (req, res) {
    db.query("SELECT owner_name FROM sp.owner_name", (err, items, fields) => {

      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };


//   var adminSignUp = async (req, res) => {
//     console.log(req.body);
//     const email = req.body.email
//     // const password=req.body.password
//     const sql = `SELECT * FROM admin WHERE email=? `
//     db.query(sql,[email], async (err, result) => {
//         //console.log(result);
//         if (err) {
//             res.send(err)
//         }
//         if (result.length > 0) {
//             res.send("admin already exist")
//         } else {
//             const salt = await bcrypt.genSalt()
//             const hashedPassword = await bcrypt.hash(req.body.password, salt)
//             db.query("INSERT INTO admin (password, email) VALUES (?,?)", [hashedPassword, email], (err, result) => {
//                 if (err) {
//                     res.send(err)
//                 }
//                 else {
//                     res.send(['yes', result])
//                 }
//             })
//         }
//     })
// }


var adminSignIn=(req,res)=>{
    const email=req.body.email
const password=req.body.password
const sqlSel=`SELECT * FROM admin WHERE  email=? AND password=? `
db.query(sqlSel,[email,password],(err,result)=>{
    if(err){
        res.send('error : ',err)
    }
    if(result.length>0){
        res.send(["succesfully connected",result])
    }else{
        res.send("Login faild")
    }
})
}

// var adminSignIn = (req, res) => {
//     const email = req.body.email
//     const password = req.body.password
//     const sqlSel = `SELECT * FROM admin WHERE email = ?`
//     db.query(sqlSel, [email], (err, result) => {
//         if (err) {
//             res.send(err)
//         }
//         if (result) {
//             try {
//                 bcrypt.compare(
//                     password,
//                     result[0].password,
//                     function (err, rez) {
//                         console.log(rez);
//                         if (err) {
//                             res.send(err);
//                         }
//                         if (rez === false) {
//                             res.send("login failed");
//                         }
//                         if (rez === true) {
//                             res.send(['yes', result]);
//                         }
//                     }
//                 );
//             } catch (err) {
//                 res.send(err);
//             }
//         } else {
//             res.send(err);

//         }
//     })
// }

module.exports = { 
    // adminSignUp,

module.exports = { 

    adminSignIn,
    selectAllsp
 };