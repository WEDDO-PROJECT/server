
    const AuthWithPhone=(req,res)=>{
        const accountSid = "ACb943fb1dce70e11a65c5003f1eba8721";
        const authToken = "38883ffb45826b31dfeadf299a728d61";
        const client = require('twilio')(accountSid, authToken);

        var min = 100;
        var max = 999;
        var num = Math.floor(Math.random() * min)+ max;

        client.messages
        .create({
            body: 'you verification code is : '+num,
            from: '+13022098637',
            to: '+21655004732'
        })
        .then(message => res.send(message.sid));
        
    }

    const Register  =(req, res) =>{
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;
       // const confirme_Password = req.body.confirme_Password;
        const tel_number = req.body.tel_number;
        const cin =req.body.cin;
        const status="pending";
        const description=req.body.description
      
        const sql =
          "INSERT INTO `SP` (`owner_name`, `email`, `password`,`cin`,`tel_number`,`status` ,`description`) VALUES (?, ?, ?, ?);";
        const checkE = "SELECT `email` FROM weddo.`SP` where `email` = ?;";
        db.query(checkE, [email], (err, result) => {
          if (err) {
            res.send({ err: err });
          } else {
            if (result.length > 0) {
              res.send({
                message: "User already have an accout assigned to this Email!!!",
              });
            } else {
              db.query(sql, [name, email, password,cin, tel_number,status,description], (err, result) => {
                if (err) {
                  console.log("user is not added!!!");
                } else {
                  res.send(result);
                  console.log("Registered successfully !!!");
                }
              });
            }
          }
        });
      }


    //   app.post("/login", function (req, res) {
    //     const email = req.body.email;
    //     const password = req.body.password;
      
    //     const sql2 = "select * from `user` where `email` = ? AND `password` = ?;";
    //     db.query(sql2, [email, password], (err, result) => {
    //       if (err) {
    //         res.send({ err: err });
    //         console.log("user not found!!");
    //       }
    //       if (result.length > 0) {
    //         res.send(result);
    //       } else {
    //         res.send({ message: "Wrong username/password combination!" });
    //       }
    //     });
    //   });
    //   app.post("/ForgotPassword",(req,res)=>{
    //     const email = req.body.email;
    //   const sql3 = "select * from `user` where `email` = ?";
    //   db.query(sql3,[email],(err,res)=>{
    //     if(err) {
    //       res.send()
    //     }
    //   })
    //   })
module.exports = { 
    AuthWithPhone,
    Register,
};
    