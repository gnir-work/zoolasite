
module.exports = function(err, res){
    res.status(500);
    res.json({err : err.message});
};