var fs = require('fs');

fs.appendFile('novotxt.txt','qualquer conteudo',function(err){
    if(err) throw err;
    console.log('ok');
});