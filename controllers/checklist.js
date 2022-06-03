const db = require('../database-mysql/')

var seeAlltasks = function (req, res) {
    db.query("SELECT todo.todo * FROM todo inner join user WHERE id_user=? "
    , (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };

  const deleteTask=(req,res)=>{
    const id =req.params.id
    db.query("DELETE FROM todo WHERE id=?",[id],(err,result)=>{
        if (err){
            res.send(err)
            }
            else{
                res.send(result)
            }
    })
     }




     module.exports = { 
        seeAlltasks,
        deleteTask,
     };
    