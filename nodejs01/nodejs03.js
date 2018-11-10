var fs = require('fs');

fs.appendFile('novoText.txt','Qualquer coisa',function(err){
    if (err) throw err;
    console.log('Salvo');
});