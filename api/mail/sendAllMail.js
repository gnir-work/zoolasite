var jsonFile = require('jsonfile');
var path = require('path');
var async = require('async');

var subject, text;
module.exports = function(cb){
    subject = 'test';
    text = 'test';
    jsonFile.readFile(path.join(__dirname, '../../etc/subscribers.json'), function(err, data){
        if(err)
            cb(err);
        var email_subscribers = data.email;
        console.log(email_subscribers)
        async.map(email_subscribers, buildMailData, function(err, emails){
            async.each(emails, require('./sendMail'), function(err){
                if(err)
                    return cb(err);
                cb(null, 'All Messages wer send');
            });
        });
    });
};

function buildMailData(mail, cb){
    var data = {
        from: 'Zoola Team <gnir.work@gmail.com>',
        to: mail,
        subject: subject,
        text: text
    };
    cb(null, data);
}