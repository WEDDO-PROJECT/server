const {AddImage,selectLastImage,selectImage}=require('../database-mysql/Image.js')
const ServiceProvider =require('../database-mysql/ServiceProvider.js') ;

const cloudinary = require("./cloudinary");
   

    
module.exports = { 
 
 
  AddImage: async function(req,res){
    console.log(req.body)
    const { uri } = req.body;

      AddImage(req.body,(err,results)=>{
          if (err){
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
          }
          else {
            selectLastImage((err, result) => {
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
},
selectImage :async function(req,res){
  const id = req.params.id
  console.log(id)
  selectImage(id, (err, result) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log(result)
          res.send({
            result,
            "code":200,
            "success":"salle added sucessfully"
              });
        }
      })
}



};
    





















  
  

    
