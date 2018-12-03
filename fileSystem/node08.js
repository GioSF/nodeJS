var fs = require('fs');

fs.open('mynewfilee.txt', 'w', function (err, file) {
  console.log('Saved!');
}); 