
//Checks if in an array of objects if a specific property value pair exists
module.exports = function(array, property, value, cb){
    for(var i = 0; i < array.length; i++){
        if(array[i][property] == value)
            return cb(i);
    }
    cb(-1);
};