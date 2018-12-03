var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'giostroppa@gmail.com',
        pass:'136853136853',
    }
});

var mailOptions = {
    from:'giostroppa@gmail.com',
    to:'giosfdev@gmail.com',
    subject:'Foi?',
    text:'cagada',
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log('Deu ruim');
    } else {
        console.log('que cagada');
    }
});