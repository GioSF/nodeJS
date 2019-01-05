var vetor = [4,3,5,7,8];
time = [ 'Wed', 'Jan', '02', '2019', '13:00:01' ];

console.log(vetor.unshift(time));
console.log(vetor);

//aplicação de for ... of
for(let elemento of vetor){
    console.log(elemento);
}

//flat não disponível para node.
//vetor.flat();
//console.log(vetor);
