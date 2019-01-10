const cluster = require('cluster');
const http = require('http');
const numCpus = require('os').cpus().length;

if(cluster.isMaster){

  console.log('Processo master n. ' + process.pid);

  for(let i = 0; i< numCpus; i++){

    //1. Este fork dispara o worker (no else)
    const worker = cluster.fork();

    //5. O processo principal envia uma mensagem em formato JSON ao worker criado
    worker.send({
      type: 'task',
      from: 'master',
      data: `Olá worker ${worker.id}, sou ${process.pid}, seu mestre.`
    });

    
    //3. O processo principal recebe a mensagem do worker
    worker.on('message', (msg) => {
    console.log(`Mensagem recebida do worker ${worker.id}: ${msg}`);
    });
    }

  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker: ' + worker + 'saiu');
    console.log(worker + ' ' + code + ' ' + signal);
    console.log('Iniciando um novo Worker');
    cluster.fork();    
  });

  var wid, workersIds = [];

  for(wid in cluster.workers){
    console.log(wid);
  }  

} else {
//Workers podem compartilhar uma única conexão tcp, neste caso um servidor http na porta 8000

//6. Mensagem recebida do master
cluster.worker.on('message', (msg) => {
  console.log(`Mensagem recebida do master: ${msg.data}`);
});

//2. Este worker dispara a mensagem a seguir ao ter ser criado
process.send(`Worker ${cluster.worker.id} envia uma mensagem`);

  http.createServer((req, res) => {
    res.writeHead('200');
    res.end('Worker ' + `${cluster.isMaster ? 'master' : 'child'}` + ' n. ' + process.pid + ' acessado.\n');
  }).listen(8000);

  //4. Executa este log com sua identificação
  console.log('Worker ' + process.pid + ' iniciado.');
}