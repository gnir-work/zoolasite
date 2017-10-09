var jsonFile = require('jsonfile');
var path = require('path');
var filePath = path.join(__dirname, 'subscribers.json');

module.exports = function saveFile(file, cb){
    jsonFile.writeFile(filePath, file, function(err){
        cb(err);
    });
};
