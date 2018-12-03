var fs = require('fs');

var txtIn = fs.createReadStream('input.txt');

var txtOut = fs.createWriteStream('pipe2.txt');

txtIn.pipe(txtOut);

console.log('fim');