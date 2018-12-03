var fs = require('fs');

//Leitura assíncrona

fs.readFile('input.txt', function(err, data){
    if(err){
        return(err.stack);
    }
    console.log('Arquivo aberto: ' + data.toString());
});