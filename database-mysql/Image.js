const db = require('./index.js')

module.exports={

    AddImage: function(event,callback){
        const sql ="INSERT INTO media SET ?"
        db.query(sql,event,function (error,results) {
             callback(error,results) 
          })
    },
    
    selectLastImage: function (callback) {
        const sql= "SELECT * FROM media ORDER BY ID DESC LIMIT 1";
        db.query(sql, function (err,result){
            callback(err,result)
        });
      },
 
    selectImage: function (id,callback) {
        const sql= "SELECT * FROM  media WHERE sp_id = ? ";
        db.query(sql, [id], (err, result) => {
            callback(err, result);
        });
    },
}