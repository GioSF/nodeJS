//preenche um vetor com valores fill(valor estático, start index, end index)
//valor estático pode vir de uma variável

var vetor1 = [1,2,3,4,5,6,7,8];
var x = 'a';
var y = 234;

console.log(vetor1.fill(22,4,6));
console.log(vetor1.fill('eita',2,5));
console.log(vetor1.fill(x,4,6));
console.log(vetor1.fill(y,4,6));
