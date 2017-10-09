var key = 'key-3142d8acdf1176d301fcb5cad9454048';
var domain = 'sandbox3eda64f7e5474fd4a2c3b3790b15b5e5.mailgun.org';
var mailGun = require('mailgun-js')({apiKey: key, domain: domain});

module.exports = function(data, cb){
    mailGun.messages().send(data, function(err, body){
        if(err)
            return cb(err);
        cb(null);
    })
}