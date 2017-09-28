var router = require('express').Router();

var passport = require('passport');


const loggedIn = function(req, res) {
    if (req.user) {
        console.log(user);
        next();
    }  else {
        res.redirect('/admin/login');
    }
};

router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin/',
    failureRedirect: '/admin/login'

}));

router.get('/login', function(req, res) {
    res.send("This is the login page")
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