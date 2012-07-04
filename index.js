var crypto = require('crypto');

// Utility Functions
exports.valid = function(request, authKey) {
   var url = 'http://' + request.headers.host + request.url;
   Object.keys(request.body).sort().forEach(function(key, i) {
       url = url + key + request.body[key];
   });
   return request.header('X-Twilio-Signature') === crypto.createHmac('sha1', authKey).update(url).digest('Base64');
};
