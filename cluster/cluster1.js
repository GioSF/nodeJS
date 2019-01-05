const cluster = require('cluster');
const http = require('http');
const numCpus = require('os').cpus().length;


if(cluster.isMaster){

    console.log(`Master ${process.pid} iniciado`);

    for(let i = 0; i < numCpus; i++){

        const worker = cluster.fork();
        worker.on('message',(msg) =>{
            console.log(`Mensagem recebida pelo Master ${process.pid}: ${msg}`);
        });

        worker.send(`Olá, sou o Master ${process.pid}.`);

    }

} else {

    console.log(`Child process ${process.pid} criado.`);
    process.send(`Sou o Child Process ${process.pid}.`);

    cluster.worker.on('message', (msg) => {
        console.log(`Mensagem recebida pelo Child ${process.pid} do master: ${msg}`);
    });

}