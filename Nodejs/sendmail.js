var nodemailer=require('nodemailer');
var sender=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'saranya02.ifet@gmail.com',
        pass:'******'
    }
});

var composemail={
    from:'saranya02.ifet@gmail.com',
    to:'saranyaramakrishnan2020@gmail.com',
    subject :'Send mail',
    html:'<h1>hi</h1>'
};

sender.sendMail(composemail,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log("Mail sent"+info.response);
    }
});

// command:send mail