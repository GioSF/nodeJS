var os = require("os");

console.log(os.tmpdir());
console.log(os.endianness());
console.log(os.hostname());
console.log(os.freemem());
console.log("os.networkInterfaces() " + os.networkInterfaces());
console.log("os.totalmem() " + os.totalmem());
console.log("os.type() " + os.type());
console.log("os.uptime() " + os.uptime());
console.log("os.userInfo() " + os.userInfo());
console.log("os.cpus() " + os.cpus());
