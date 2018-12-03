var fs = require('fs');

fs.unlink('texto2.txt', function(err){
    if (err) throw err;
    console.log('apagado');
});