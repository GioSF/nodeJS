var fs = require('fs');
var rf = fs.createReadStream('./file.txt');

rf.on('open', function(){
    console.log('arquivo aberto');
});