var fs = require('fs');

fs.readFile('texto.txt', function(err, data){
    if (err) console.log.toString(err);
    console.log(data.toString());
});

console.log('Fim');