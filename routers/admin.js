var router = require('express').Router();

router.get('/', function(req, res){
    res.render('admin');
});

router.get('/push', function(req, res){
    require('../api/mail/sendAllMail')(function(err, output){
        if(err)
            return require('../utils/errHandler')(err, res);
        res.json({output: output});
    });
});

module.exports = router;