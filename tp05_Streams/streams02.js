var fs = require('fs');
var data = 'Vamo la';

var writer = fs.createWriteStream('saida.txt');

writer.write(data, 'UTF8');

writer.end();

writer.on('finish', function(){
    console.log('escrita terminada');
});

writer.on('error', function(err){
    console.log(err.stack);
});

console.log('fim');