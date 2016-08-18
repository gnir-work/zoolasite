
module.exports = function(method, id, cb) {
   require('../../etc/getSubscribers')(function(err, subscribers) {
       if(err)
           return cb(err);
       require('../../utils/contains')(subscribers[method], 'id', id, function(index){
           if(index > -1){
               subscribers[method].splice(index, 1);
               require('../../etc/saveSubscribers')(subscribers, function (err) {
                   if(err)
                       return cb(err);
                   return cb(null, 'You have been removed from the email subscription list!');

               });    
           } else
               cb(null, 'Unfortunately we havent found you on the subscription list')
           
       });

   });
};
