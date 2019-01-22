var fs = require ("fs");
var data = '';
var buffer = require('buffer');

var reader = fs.createReadStream('es.ogg');

reader.on('data', (chunk) => {
    data += chunk;
});

reader.on('end', function(){
    var buf = new Buffer(32);
    buf.write(data, 0, 32, 'utf8');
    console.log(buf);
});

reader.on('error', function(err){
    console.log(err.stack);
});

console.log('fim');