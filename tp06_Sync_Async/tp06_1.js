var fs = require('fs');

// Asynchronous read
// Possui um callback como segundo argumento
// A execução do código não para aqui
// JS segue a execução do código (listening for other events)

fs.readFile('input.txt', function(err, data){
    if(err){
        console.error(err);
    }
    console.log('Asynchronous read :' + data.toString());
})

// Synchronous read
// Execução estruturada

var data = fs.readFileSync('input.txt');
console.log('Syncrhonous read: ' + data.toString());
console.log('fim');