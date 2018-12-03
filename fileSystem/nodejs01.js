var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./index.html', function (err, data) {
        const {method, url, headers} = req;
        console.log(method.valueOf());
        console.log(url.toString());
        console.log(headers.valueOf());
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        console.log(err);
        res.end();
    });
}).listen(8080);
