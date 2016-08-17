var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname,'public')));

//Routing
app.use('/', require('./routers/public'));

app.use('/admin', require('./routers/admin'));


module.exports = app;