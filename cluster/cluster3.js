//Fonte estudada: https://medium.com/@NorbertdeLangen/communicating-between-nodejs-processes-4e68be42b917

https://www.sitepoint.com/how-to-create-a-node-js-cluster-for-speeding-up-your-apps/


var cluster = require('cluster');

if(cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
    workers[1].send({type: 'kill', from:'master'});
} else {

    //app responderá da mesma forma a requisições de qualquer url 
    var app = require('express')();
    app.all('/*', function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})

    var server = app.listen(8000, function() {
        console.log('Process ' + process.pid + ' is listening to all incoming requests');
    });

    process.on('message', (msg) =>{
         if(msg.type == 'kill'){
             process.exit(0);
         }
    });

}