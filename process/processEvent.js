process.on('exit', function (code) {

    setTimeout(function () {
        console.log('Dentro do timeOut');
    }, 0);

    console.log('Dentro do process.on');

//    process.exit();

});

process.argv.forEach(element => {

    console.log(element);

});

/*
MDN: The heap is where objects, strings, and closures are stored. Variables are stored in the stack and the actual JavaScript code resides in the code segment.
*/
console.log("process.execPath: " + process.execPath);
console.log("process.execArgv: " + process.execArgv);
console.log("process.pid: " + process.pid);
console.log("process.arch: " + process.arch);
console.log("process.platform: " + process.platform);
console.log('process.cwd(): ' + process.cwd());
console.log('process.getgid(): ' + process.getgid());
console.log('process.getuid(): ' + process.getuid());
console.log('process.memoryUsage().external(): ' + process.memoryUsage().external);
console.log('process.memoryUsage().heapTotal: ' + process.memoryUsage().heapTotal);
console.log('process.memoryUsage().heapUsed: ' + process.memoryUsage().heapUsed);
console.log('process.memoryUsage().rss: ' + process.memoryUsage().rss);
process.getgroups().forEach(function(group){
    console.log(group);
});
process.abort();
