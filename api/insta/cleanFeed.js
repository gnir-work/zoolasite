var async = require('async');
module.exports = function(medias, cb){
    async.map(medias, cleanFeed, function(err, cleanedFeed){
        if(err)
            return cb(err);
        cb(null, cleanedFeed);
    })
};

function cleanFeed(media, cb){
    // console.log(JSON.stringify(media.tags.indexOf('zoolasalon.com')));
    var newMedia = {
        src: media.images.standard_resolution.url,
        alt: 'instagram photo'
    };
    cb(null, newMedia);
}