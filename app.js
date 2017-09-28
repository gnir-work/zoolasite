var express = require('express');
var path = require('path');
var app = express();
var favicon = require('serve-favicon');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname, 'public')));


// Set up express application
app.use(cookieParser());
app.use(bodyParser());

// required for passport
app.use(session({secret: 'ilovescotchscotchyscotchscotch'})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Configuration
require('./config/passport')(passport); // pass passport for configuratio


app.use(flash()); // use connect-flash for flash messages stored in session

//Routing
app.use('/', require('./routers/public'));

app.use('/admin', require('./routers/admin'));

app.use('/insta', require('./routers/instagram'));

app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')));

app.get('*', function (req, res) {
    res.redirect('/');
});


module.exports = app;