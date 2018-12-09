function printInfo () {
    console.log(__filename);
    console.log(__dirname);
}

setTimeout(printInfo, 5000);

//clearTimeout(t);

//setInterval(printInfo, 5000);

console.log('Antes do beforeExit');
