var eventos = require('events');
var emissorEventos = new eventos.EventEmitter();

var meuEvento = function() {
    console.log('evento iniciado');
};

emissorEventos.on('vai', meuEvento);
emissorEventos.emit('vai');