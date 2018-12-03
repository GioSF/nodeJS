var events = require('events');
var fs = require('fs');

var eventEmitter = new events.EventEmitter();

var conectarHandler = function conectar(){
    console.log('Conexão estabelecida');
    eventEmitter.emit('Transferir_dados');
}

eventEmitter.on('conectar', conectarHandler);
eventEmitter.on('conectar', conectarHandler);
eventEmitter.on('conectar', conectarHandler);
eventEmitter.on('conectar3', conectarHandler);
eventEmitter.on('conectar4', conectarHandler);
eventEmitter.on('conectar5', conectarHandler);
eventEmitter.on('conectar6', conectarHandler);
eventEmitter.on('conectar7', conectarHandler);
eventEmitter.on('conectar8', conectarHandler);
eventEmitter.on('conectar9', conectarHandler);
eventEmitter.on('conectar0', conectarHandler);

console.log(eventEmitter.listenerCount('conectar', conectarHandler));

eventEmitter.on('Transferir_dados', function(){
    fs.readFile('dados.txt', function(err, data){
        if(err){
            console.log('erro na abertura do arquivo');
            return;
        }
        console.log(data.toString());
    })
    console.log('Dados transferidos');
})

eventEmitter.emit('conectar');

eventEmitter.emit('conectar');


console.log('fim');