console.log("this is a test");
var LocalStrategy = require('passport-local').Strategy;


module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.username);
    });

    passport.deserializeUser(function (id, done) {
        done(null, {username: id})
    });

    /**
     * Basic local strategy implementation with hardcoded username and password.
     */
    passport.use(new LocalStrategy({
            passReqToCallback: true
        }, function (req, username, password, done) {
            if (username === 'zoola' && password === 'zoolaSalon') {
                done(null, {username: 'nir'});
            } else {
                done(null, false);
            }
        }
    ))
}
;
