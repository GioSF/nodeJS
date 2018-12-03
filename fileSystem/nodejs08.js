var fs = require('fs');

fs.open('novoTexto03.txt', 'w', function(err, file){
    if (err) throw err;
    console.log("arquivo criado");

    fs.writeFile('novoTexto03.txt','exemplo de texto', function(err){
        if (err) throw err;
        console.log('arquivo escrito');
    });

    fs.appendFile('novoTexto03.txt','atualização', function(err){
        if (err) throw err;
        console.log('append');
    });

    fs.writeFile('novoTexto03.txt', 'subs', function(err){
        if (err) throw err;
        console.log('sobrescrito');
    })
});