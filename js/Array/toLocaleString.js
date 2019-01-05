var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var localeString = array1.toLocaleString('en', {timeZone: "UTC"});

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

//gera um timeStamp. split gera um vetor limitado a 5 elementos quebrando o timeStamp conforme " " e eliminando o excedente do vetor antigo (horário, nesse caso).

console.log(Date().split(" ",5));
// [ 'Wed', 'Jan', '02', '2019', '13:00:01' ]