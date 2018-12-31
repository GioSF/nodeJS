const net = require('net');

const client = net.connect({port: 8080}, function(){
    console.log('Cliente se conecta');
});

client.on('data', function(data){
    console.log(data.toString());
});

client.on('end', function(){
    console.log('Conexão terminada');
});