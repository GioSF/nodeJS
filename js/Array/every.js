function abaixo(valor){
    return valor > 10;
}

var vetor = [2,4,6,8,98,34];
var vetor2 = [98,34];

console.log(vetor.every(abaixo));
console.log(vetor2.every(abaixo));