
var router = require('express').Router();

//Basic Page
router.get('/', function(req, res, next){
    res.render('index.ejs', {})
});

//Subscribe
router.put('/:phone/:email', function(req, res){

    var email = req.params.email;
    if(email == 'empty' || !email)
        email = null;

    var phone = req.params.phone;
    if(phone == 'empty' || !phone)
        phone = null;

    require('../api/subscribe')({phone: phone, email: email}, function(err, output){
        if(err)
            return require('../utils/errHandler')(err, res);
        res.json({output: output})
    })
});

//Default
router.get('*', function(req, res){
    res.redirect('/');
});

module.exports = router;