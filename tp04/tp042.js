var buf = new Buffer(26);

for (i=0; i<28; i++){
    buf[i] = i + 97;
}

var json = buf.toJSON(buf);

console.log(buf.toString('ascii'));
console.log(json);
