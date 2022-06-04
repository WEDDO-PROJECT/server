var db = require("../database-mysql");

const createRequest=(req,res)=>{

const sql ="INSERT INTO chosenservices SET ?"
    db.query(sql,req.body,(err,result)=>{
    if(err){
        res.send(err)
    }
    if(result){res.send(result)}
    
})
}
const getRequestByIdUser=(req,res)=>{

    const sql ="select * from sp s inner join chosenservices c on c.sp_id=s.id  where c.user_id=? "
        db.query(sql,[req.params.id],(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){res.send(result)}
        
    })
    }
module.exports={createRequest,getRequestByIdUser}
