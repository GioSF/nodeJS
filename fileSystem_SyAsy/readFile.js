//Sintaxe:
//fs.read(fd, buffer, offset, lenght, position, callback)

//metodo open retorna um file descriptor que permite todas as operações com o arquivo que interagem com o filesystem.
//Dados são lidos por métodos como open através das especificações de arquivo contidas em um file descriptor.

var fs = require('fs');
var buf = new Buffer(1024);

console.log('Inicio do programa e abertura do arquivo.');

//Abertura assincrona (non-blocking)
//Os métodos assíncronos possuem pares sincronos com o sufixo sync.

fs.writeFile('input2.txt', 'Criando um arquivo', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        console.log(err);
    }
    console.log('Arquivo foi aberto.');

    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log('Arquivo lido.');
        console.log('Escrever no arquivo');
    });

    fs.appendFile(fd, 'Deu certo?', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Arquivo escrito.');
        console.log(fd.toString() + "\nappendFile: " + buf.slice(0, buf.length).toString());
    });

    //Fechar o arquivo

    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Arquivo fechado.');
    });

    console.log('Apagar arquivo');

});

//Os parâmetros de read são:
    //fd: file descriptor que especifica o arquivo a aser lido
    //buffer: é o buffer em que o arquivo será escrito
    //offset: onde começar a escreve no buffer. 0 para o início.
    //lenght: dimensão do buffer.
    //position: de que ponto começar a ler o arquivo descrito no fd`. 0     para começar do início.
