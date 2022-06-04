const db = require('./index.js')

module.exports={

    AddSalle: function(event,callback){
        const sql ="INSERT INTO salle SET ?"
        db.query(sql,event,function (error,results) {
             callback(error,results) 
          })
    },
    
    selectLastSalle: function (callback) {
        const sql= "SELECT * FROM salle ORDER BY ID DESC LIMIT 1";
        db.query(sql, function (err,result){
            callback(err,result)
        });
      },
 
      selectSalle: function (callback) {
        const sql= "SELECT * FROM salle LIMIT 10";
        db.query(sql, function (err,result){
            callback(err,result)
        });
      },
}