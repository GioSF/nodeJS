var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('./index.html', function(err, data){
        if(err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        console.log(err);
        res.end();
    });
}).listen(8080);