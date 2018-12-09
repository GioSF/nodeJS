var fs = require('fs');

/* fs.mkdir('novoDir', (err) =>{
    if(err){
        console.log(err);
    }
    console.log('Dir criado');
});
 */
fs.readdir('novoDir', (err, files) => {
    if(err){
        console.log(err);
    }

    files.forEach(function(file){
        console.log(file);
    });    
});

fs.rmdir('novoD', (err) => {
    if(err){
        console.log(err);
    }
    console.log('Pasta apagada');

});
fs.