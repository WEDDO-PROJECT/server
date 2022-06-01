const db = require('./index.js')

module.exports={

    AddUser: function(event,callback){
        const sql ="INSERT INTO user SET ?"
        db.query(sql,event,function (error,results) {
             callback(error,results) 
          })
    },
    
    selectLastUser: function (callback) {
        const sql= "SELECT * FROM user ORDER BY ID DESC LIMIT 1";
        db.query(sql, function (err,result){
            callback(err,result)
        });
      },

      selectUserSP: function(callback){
          const sql="SELECT * FROM user";
          db.query(sql,function (err,result){
              callback(err,result)
          })
      },

    //   login :function (user,callback){
    //     const sql= "SELECT * FROM user WHERE email = ? OR password = ?";
    //     db.query(sql, [user.name,user.password],function (err,result){
    //         callback(err,result)
    //     });
    //   }

     getAllEmails: function (email, callback) {
        const sql = "SELECT * FROM  user WHERE email = ? ";
        connection.query(sql, [email], (err, result) => {
          callback(err, result);
        });
      },

      getPasswordByEmail: (email, callback) => {
        const sql = "SELECT password FROM user WHERE email = ?;";
        connection.query(sql, [email], (err, result) => {
          callback(err, result);
        });
      },
   
}