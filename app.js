var express = require('express');
var path = require('path');
var app = express();
var favicon = require('serve-favicon');

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname,'public')));

//Routing
app.use('/', require('./routers/public'));

app.use('/admin', require('./routers/admin'));

app.use('/insta', require('./routers/instagram'));

app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')));

app.get('*', function(req, res){
    res.redirect('/');
});


module.exports = app;