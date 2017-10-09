var router = require('express').Router();
var insta = require('instagram-node').instagram();
var instaConfig = require('../etc/instaConfig');



var redirect_uri = 'http://localhost:9000/insta/handleauth';

router.get('/authorize', function(req, res){
    insta.use({
        client_id: instaConfig.client_id,
        client_secret: instaConfig.client_secret
    });
    res.redirect(insta.get_authorization_url(redirect_uri, { scope: ['public_content'], state: 'a state' }));
});

router.get('/handleauth', function(req, res){
    insta.authorize_user(req.query.code, redirect_uri, function(err, result) {
        if (err) {
            console.log(err.body);
            res.send("Didn't work");
        } else {
            instaConfig.access_token = result.access_token;
            res.send('You made it!!');
        }
    });
});


router.get('/media', function(req, res){
    insta.use({access_token: instaConfig.access_token});
    insta.user_media_recent('230222190', function(err, medias, pagination, remaining, limit) {
        if(err){
            console.log(JSON.parse(err));
            if(err.error_type == 'OAuthAccessTokenException')
                res.json({validToken: false, media:'backupMedia'});
            res.json({validToken: true, success: false, media: 'backupMedia'});
        }
        else
            require('../api/insta/cleanFeed')(medias, function(err, cleanMedias){
                if(err)
                    return require('../utils/errHandler')(err, res);

                res.json({validToken: true, success: true, media: cleanMedias});
            })
    });
});

module.exports = router;