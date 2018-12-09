var fs = require('fs');

var fileName = 'textoVar.txt';

//Escrita assíncrona de arquivo
fs.writeFile(fileName, 'Qualquer texto', function(err){
    if(err){
        console.error(err);
    }
    console.log('arquivo escrito com sucesso.');
    console.log('Abertura do arquivo');

    //Leitura assíncrona de arquivo

    fs.readFile(fileName, function(err, data){
        if(err){
            console.error(err);
        }
        console.log('Conteúdo: ' + data.toString());
    });
});