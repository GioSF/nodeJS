var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('file.txt.gz').
pipe(zlib.createGunzip()).
pipe(fs.createWriteStream('file.txt'));

console.log('fim');