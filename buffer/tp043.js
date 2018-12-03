var buf1 = new Buffer('Isso vai dar lenha. ');
var buf2 = new Buffer('Isso vai dar lenha. ');
var buf3 = new Buffer('Vai dar certo.');

var result = buf2.compare(buf1);
console.log(result);

buf1.copy(buf3,[4],[5],[10]);

console.log(buf3.toString());

buf3.copy(buf1);

console.log(buf1.toString());

var json = Buffer.concat([buf1, buf2]);

console.log(json.toString());
console.log(json);