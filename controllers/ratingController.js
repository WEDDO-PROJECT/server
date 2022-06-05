var db = require("../database-mysql");

const createRating=(req,res)=>{

const sql ="INSERT INTO rating SET ?"
    db.query(sql,req.body,(err,result)=>{
    if(err){
        res.send(err)
    }
    if(result){res.send(result)}
    
})
}
const getAllRating=(req,res)=>{

    const sql ="select * from rating "
        db.query(sql,(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){res.send(result)}
        
    })
    }
    

module.exports={createRating,getAllRating}
