var fs = require('fs');

//Leitura assincrona

fs.readFile('inputt.txt', function(err, data){
    if(err){
        console.log(err.stack);
    }
    console.log('arquivo aberto: ' + data.toString());
});

//Leitura síncrona

var texto = fs.readFileSync('inputt.txt');

console.log('Leitura síncrona: ' + texto.toString());
console.log("fim");