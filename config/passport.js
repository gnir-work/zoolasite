console.log("this is a test");
var LocalStrategy = require('passport-local').Strategy;
var hash = require('string-hash');

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
            if (username === 'zoola' && hash(password) === 3487765549) {
                done(null, {username: 'nir'});
            } else {
                done(null, false);
            }
        }
    ))
}
;
