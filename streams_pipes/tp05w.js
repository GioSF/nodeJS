var fs = require('fs');
var data = 'Vê lá.';

var writerStream = fs.createWriteStream('newfile2.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('end', function(){
    console.log('terminou escrita');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('Fim programa');