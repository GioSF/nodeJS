var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
    console.log('fim da leitura');
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('Fim do programa');