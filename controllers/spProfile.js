var db=require('../database-mysql')

const getSpInfo=(req,res)=>{
    console.log(req.params.id_sp)
    const SpInfo=`SELECT * FROM sp WHERE id_Sp = ${req.params[`id_Sp`]}`;
    db.query(spInfo,(err,data)=>{
        if(err){
            res.send(err)
            console.log(err)
        }else{
            res.send(data)
        }
    })
}

module.exports={getSpInfo}