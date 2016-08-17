var jsonFile = require('jsonfile');
var path = require('path');

module.exports = function(info, cb) {
    var filePath = path.join(__dirname, '../etc/subscribers.json');
    jsonFile.readFile(filePath, function (err, subscribers) {
        if (err)
            cb(err);
        if(info.email){
            if(subscribers.email.indexOf(info.email) > -1)
                return cb(new Error('Sorry, Email is already subscribed'));
            subscribers.email.push(info.email);
        }
        if(info.phone){
            if(subscribers.phone.indexOf(info.phone) > -1)
                return cb(new Error('Sorry, Phone Number is already subscribed'));
            subscribers.phone.push(info.phone);
        }

        jsonFile.writeFile(filePath, subscribers, function(err){
            if(err)
                cb(err);
            cb(null, 'Congratulation your are subscribed to the Zoola Salon feed!')
        });
    });
};
