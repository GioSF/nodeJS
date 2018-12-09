var fs = require('fs');

fs.stat('inputt.txt',function(err,stats){
    if(err){
        return err.stack;
    }
    console.log(stats);
// Checar o tipo de arquivo
    console.log('Is File?: ' + stats.isFile());
    console.log('Is directory?: ' + stats.isDirectory());

});