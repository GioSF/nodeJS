var fs = require('fs');
var zlib = require('zlib');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

fs.createReadStream('input.txt').
pipe(zlib.createGzip()).
pipe(fs.createWriteStream('file.txt.gz'));

readerStream.pipe(writerStream);

console.log('Fim');