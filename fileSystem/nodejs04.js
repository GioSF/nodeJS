var fs = require('fs');

fs.open('texto2.txt','w',function(err,arquivo){
    if (err) throw err;
    console.log('Salvo');
});