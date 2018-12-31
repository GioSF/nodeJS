const dns = require("dns");

dns.resolve('www.google.com',(err,add) =>{
    if(err){
    console.log(err);
    }
    console.log('Passou: ' + add);
});

dns.lookup('www.google.com',(err, add) => {
    if(err){
        console.log(err);
    }
    console.log("lookup: " + add);
});

dns.lookup('iana.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
// address: "192.0.43.8" family: IPv4


dns.lookup('www.facebook.com', function onLookup(err, address, family) {
    console.log('address: %j family: %s', address, family);
    dns.reverse(address, function (err, hostnames) {
       if (err) {
          console.log(err.stack);
       }
 
       console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });  
 });

 dns.resolve4('archive.org', (err, addresses) => {
    if (err) throw err;
  
    console.log(`addresses: ${JSON.stringify(addresses)}`);
  
    addresses.forEach((a) => {
      dns.reverse(a, (err, hostnames) => {
        if (err) {
          throw err;
        }
        console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
      });
    });
  });