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
    const deleteRequest=(req,res)=>{
        var sql ='delete from chosenservices where user_id=? and sp_id=?'
        console.log(req.body);
        db.query(sql,[req.body.user_id,req.body.sp_id],(err,result)=>{
            if(err){res.send(err)}
            if(result){res.send(result)}
        })
    }
    const getAll=(req,res)=>{
        db.query('select * from chosenservices',(err,result)=>{
            if(err){res.send(err)}
            if(result){res.send(result)}
        })
    }
    const getAllByIdSp=(req,res)=>{
        var x=req.body.id;
        console.log(x);
        db.query(`select * from chosenservices where sp_id=${x}`,(err,result)=>{
            if(err){res.send(err)}
            if(result){res.send(result)}
        })
    }
module.exports={createRequest,getRequestByIdUser,deleteRequest,getAll,getAllByIdSp}
