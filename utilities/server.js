const net = require('net');
const server = net.createServer(function(c){
    
    console.log('Conexão estabelecida');

    c.on('end', function(){
        console.log('Conexão terminada');
    });

    c.write('Deu certo');
    c.pipe(c);

});

server.listen(8080, function(){
    console.log('Server listening to 8080');
});


// createServer[options, listener]: cria um novo servidor tcp ou ipc
//options: allowHalfOpen: (tcp), default é false
//         pauseOnConnect: 
//listener

//"Connections" are actually sockets resulting from accepting an incoming connection. Sockets are file descriptors, which are the only thing you can pass. Requests however are higher level objects and I doubt you can pass them to workers at all. I