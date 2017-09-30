var jsonFile = require('jsonfile');
var path = require('path');
module.exports = function(fileName, cb){
    var filePath = path.join(__dirname, fileName);
    jsonFile.readFile(filePath, function (err, data) {
        if (err)
            return cb(err);
        cb(null, data);
    });
};
