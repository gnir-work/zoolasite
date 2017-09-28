var router = require('express').Router();

var passport = require('passport');


const loggedIn = function(req, res, next) {
    if (req.user) {
        console.log(req.user);
        next();
    }  else {
        res.redirect(301, '/admin/login');
    }
};

router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin/success',
    failureRedirect: '/admin/failed'
}));

router.get('/success', function(req, res){
    res.send('')
});

router.get('/failed', function(req, res){
    res.statusCode = 422;
    res.send("Incorrect username or password");
});

router.get('/login', function(req, res) {
    res.render('login.ejs', {error: req.flash('error')});
});

router.get('/', loggedIn, function(req, res) {
    res.json({test: 'test'})
});

// router.get('/push', function (req, res) {
//     require('../api/mail/sendAllMail')(function (err, output) {
//         if (err)
//             return require('../utils/errHandler')(err, res);
//         res.json({output: output});
//     });
// });

module.exports = router;