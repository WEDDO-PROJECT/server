const db = require('./index.js')

module.exports={

    AddUser: function(event,callback){
        const sql ="INSERT INTO sp SET ?"
        db.query(sql,[event],function (error,results) {
             callback(error,results) 
          })
    },
    
    selectLastUser: function (callback) {
        const sql= "SELECT * FROM sp ORDER BY ID DESC LIMIT 1";
        db.query(sql, function (err,result){
            callback(err,result)
        });
      },
}