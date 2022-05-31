const db=require('./index.js')

module.exports={
    getSpInfo:function(callback){
        const sql='SELECT * FROM sp'
        db.query(sql,function(err,result){
            callback(err,result)
        })
    }
}