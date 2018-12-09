var fs = require('fs');
var buf = new Buffer(1024);


/* fs.unlink('input2.txt', (err) =>{
    if(err){
        console.log(err);
    }
    console.log('Arquivo apagado');
});
 */
fs.open('texto.txt', 'r+', (err, fd) => {
    if (err) {
        console.log(err);
    }

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if (err) {
            console.log(err)
        }
        if (bytes > 0) {
            console.log('Antes: ' + buf.slice(0, bytes).toString());
        }
    });

    fs.ftruncate(fd, 20, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Arquivo truncado.');
    });

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if (err) {
            console.log(err)
        }
        if (bytes > 0) {
            console.log('Antes: ' + buf.slice(0, bytes).toString());
        }
    });

});