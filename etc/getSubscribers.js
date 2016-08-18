var jsonFile = require('jsonfile');
var path = require('path');
var filePath = path.join(__dirname, 'subscribers.json');
module.exports = function(cb){
    jsonFile.readFile(filePath, function (err, subscribers) {
        if (err)
            return cb(err);
        cb(null, subscribers);
    });
};
