const EmissorEventos = require('events');

class MeuEmissor extends EmissorEventos{}

const meuEmissor = new MeuEmissor();

meuEmissor.on('evento', () => {
    console.log('começou');
});

meuEmissor.emit('evento');