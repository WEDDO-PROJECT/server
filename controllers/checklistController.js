const db = require("../database-mysql/");

var selectTasksByIdUser = function (req, res) {
  db.query(
    "SELECT * FROM check_list where user_id=? ",
    [req.params.id],
    (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    }
  );
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM check_list WHERE id=?", [id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
const createTask =(req,res)=>{
  var sql='insert into check_list set ?'
  db.query(sql,req.body,(err,result)=>{
    if(err)res.send(err)
    if(result)res.send(result)
  })
}

module.exports = {
  selectTasksByIdUser,
  deleteTask,
  createTask
};
