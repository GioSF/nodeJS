var fs = require ("fs");
var data = '';

var reader = fs.createReadStream('input.txt');

reader.setEncoding('UTF8');

reader.on('data', function(chunk){
    data += chunk;
});

reader.on('end', function(){
    console.log(data);
});

reader.on('error', function(err){
    console.log(err.stack);
});

console.log('fim');