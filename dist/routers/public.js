
var router = require('express').Router();

//Basic Page
router.get('/', function(req, res, next){
    res.render('index.ejs', {})
});

//Subscribe
router.put('/:email', function(req, res){

    var email = req.params.email;

    if(email == 'empty' || !email)
        email = null;

    var phone = req.params.phone;
    if(phone == 'empty' || !phone)
        phone = null;

    require('../api/subscription/subscribe')({phone: phone, email: email}, function(err, output){
        if(err)
            return require('../utils/errHandler')(err, res);
        res.json({output: output})
    })
});

//Unsubscribe
router.get('/unsubscribe/:method/:contactInfo', function(req, res){
    console.log('test');
    require('../api/subscription/unsubscribe')(req.params.method, req.params.contactInfo, function(err, output){
        if(err)
            return require('../utils/errHandler')(err, res);
        res.end(output);
    })
});

router.get('/loadPageData/', function(req, res){
   require('../etc/loadJsonFile')('pageData.json', function(err, data){
       if(err)
           return require('../utils/errHandler')(err, res);
       else
           res.json(data);
   })
});

module.exports = router;