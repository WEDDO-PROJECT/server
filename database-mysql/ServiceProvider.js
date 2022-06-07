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
      updatePriceSP: function(id , price , callback){
        const sql="UPDATE sp SET sp.pack_price = ? WHERE sp.id = ?";
        db.query(sql,[price,id ], (err,result)=>{
            callback(err,result)
        })
      },
      updateMapSP: function(id,price,name ,longitude ,latitude , callback){
        const sql="UPDATE sp SET sp.pack_price = ? , sp.name = ? , sp.latitude = ?, sp.longitude = ? WHERE sp.id = ?";
        db.query(sql,[price,name ,latitude,longitude ,id ], (err,result)=>{
            callback(err,result)
        })
      },
      

      
     getAllEmails: function (email, callback) {
        const sql = "SELECT * FROM  sp WHERE email = ? ";
        db.query(sql, [email], (err, result) => {
          callback(err, result);
        });
      },
      getSp: function (id, callback) {
        const sql = "SELECT * FROM  sp WHERE id = ? ";
        db.query(sql, [id], (err, result) => {
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