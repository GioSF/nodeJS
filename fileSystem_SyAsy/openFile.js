var fs = require('fs');

fs.open('inputt.txt', 'rs', function(err, fd){
    if(err){
        console.log(err.stack);
    }
    console.log('arquivo aberto com sucesso');
});
