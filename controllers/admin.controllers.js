var db = require("../database-mysql");

var selectAllsp = function (req, res) {
    db.query("SELECT owner_name FROM sp.owner_name", (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };

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

module.exports = { 
    adminSignIn,
    selectAllsp
 };