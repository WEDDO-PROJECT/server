const db = require("../database-mysql/");


const selectTasksByIdUser=(req,res)=>{
  var id = req.body.id;
  console.log(id);
  sql='select * from check_list where user_id=?'
  db.query(sql,id,(err, results)=>{
    if (err)res.send(err);
    if (results)res.send(results);
  })

}

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
