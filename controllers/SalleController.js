const {AddSalle,selectLastSalle,selectSalle}=require('../database-mysql/Salle.js')
const ServiceProvider =require('../database-mysql/ServiceProvider.js') ;

   

    
module.exports = { 
 

AddSalle: async function(req,res){
  console.log(req.body)
  AddSalle(req.body,(err,results)=>{
    if (err){
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }
    else {
      selectLastSalle((err, result) => {
        if (err) {
          console.log(err)
        }
        else {
          res.send({
            result,
            "code":200,
            "success":"salle added sucessfully"
              });
        }
      })
      
      }
  })
}
,
SelectSalle :async function(req,res){
    selectSalle((err, result) => {
        if (err) {
          console.log(err)
        }
        else {
          res.send({
            result,
            "code":200,
            "success":"salle added sucessfully"
              });
        }
      })
}



};
    





















  
  

    
