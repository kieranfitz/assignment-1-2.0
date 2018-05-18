var api_key = '4c22e459b1d7f40e76c5f871b5083428';
var domain = 'kieranfitz.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var contactEvent = require('./events');

var  messageHandler = function(m) {
         // The Payload
        var data = {
            from: 'WIT BSc IT <me@wit.ie>',
            to: JSON.parse(m).email,
            subject: 'Welcome',
            text: 'Welcome to the company!!!'
          };

          mailgun.messages().send(data, function (error, body) {
            console.log(body);
          });
        }

contactEvent.subscribe('create_contact_event', messageHandler)