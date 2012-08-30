twiliosig
=========

Node module for making sure HTTP requests are really coming from Twilio

Usage:
```
var twiliosig = require('twiliosig');

if (twiliosig.valid(request, 'your auth key')) {
  response.send('w00t!');
}
else {
  response.send('Intruder!');
}
```