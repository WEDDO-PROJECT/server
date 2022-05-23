
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



module.exports = { 
    AuthWithPhone,
};
    