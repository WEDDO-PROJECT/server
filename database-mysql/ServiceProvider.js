const db = require('./index.js')

module.exports={

    AddUser: function(event,callback){
        const sql ="INSERT INTO sp SET ?"
        db.query(sql,event,function (error,results) {
             callback(error,results) 
          })
    },
    
    selectLastUser: function (callback) {
        const sql= "SELECT * FROM sp ORDER BY ID DESC LIMIT 1";
        db.query(sql, function (err,result){
            callback(err,result)
        });
      },

      selectUserSP: function(callback){
          const sql="SELECT * FROM sp";
          db.query(sql,function (err,result){
              callback(err,result)
          })
      },

      
     getAllEmails: function (email, callback) {
        const sql = "SELECT * FROM  sp WHERE email = ? ";
        db.query(sql, [email], (err, result) => {
          callback(err, result);
        });
      },

      getPasswordByEmail: (email, callback) => {
        const sql = "SELECT password FROM sp WHERE email = ?;";
        db.query(sql, [email], (err, result) => {
          callback(err, result);
        });
      },
}