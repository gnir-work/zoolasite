var app = require('./app.js');

app.listen(app.get('port'), function(err){
    if(!err)
        console.log('server listening on port ' + app.get('port'));
});