var express = require('express');
var path = require('path');
var app = express();



app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 3000));

console.log(__dirname);

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res, next){
    res.render('index.ejs', {})
});

app.listen(app.get('port'), function(err){
    if(!err)
        console.log('server listening on port ' + app.get('port'));
})