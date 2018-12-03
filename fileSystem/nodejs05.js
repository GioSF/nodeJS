var fs = require('fs');

fs.appendFile('texto2.txt','h', function(err){
    if (err) throw err;
    console.log('atualizado');
});