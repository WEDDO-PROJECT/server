var db = require("../database-mysql");

var adminSignIn=(req,res)=>{
    const email=req.body.email
const password=req.body.password
const sqlSel=`SELECT * FROM admin WHERE  email=? AND password=? `
db.query(sqlSel,[email,password],(err,result)=>{
    if(err){
        res.send(err)
    }
    if(result.length>0){
        res.send(["succesfully connected",result])
    }else{
        res.send("Login faild")
    }
})
}
