var fs = require('fs');

fs.writeFile('texto2.txt', 'subs', function (err) {
    if (err) throw err;
    console.log(err);
});