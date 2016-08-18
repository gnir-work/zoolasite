var shortid = require('shortid');

module.exports = function(info, cb) {
    require('../../etc/getSubscribers')(function(err, subscribers){
        if (err)
            return cb(err);
        if(info.email){
            if(subscribers.email.indexOf(info.email) > -1)
                return cb(new Error('Sorry, Email is already subscribed'));
            subscribers.email.push({info: info.email, id: shortid.generate()});
        }
        if(info.phone){
            if(subscribers.phone.indexOf(info.phone) > -1)
                return cb(new Error('Sorry, Phone Number is already subscribed'));
            subscribers.phone.push({info : info.phone, id: shortid.generate()});
        }

        require('../../etc/saveSubscribers')(subscribers, function(err){
            if(err)
                cb(err);
            cb(null, 'Congratulation your are subscribed to the Zoola Salon feed!')
        });
    });
};
