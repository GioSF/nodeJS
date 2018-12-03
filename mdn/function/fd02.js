//Uma function* declaration define um generator function
//que retorna um objeto Generator

function* generator(i){
    yield i;
    yield i + 10;
}

//A palavra-chave yield pausa a execução de uma generator function na expressão logo à frente de yield e é retornado para a chamada do generator. É um tipo de return para o generator.

//Yield retorna um objeto IteratorResult com duas propriedades, value e done


var gen = generator(10);

console.log(gen.next().value);
//executa até o yield em 5 e para. Por algum motivo, uma propriedade done apos 16 gera um comportamento estranho: o value da linha 20 retorna undefined. Sem esse done, o next recomeça o generator normalmente e o value retorna 20


console.log(gen.next().value);
gen.
console.log(gen.next().done);
//recomeça de onde parou e executa até o próximo yield (linha 6), acrescentando 10 ao valor de i

//Uma vez pausado no yield, a execução do generator permanece pausara até a chamada de um método next(). O next() recomeça a execução até que um dos estados seja atingido:
// um outro yield;
//um trhow: invoca uma exception a partir do generator. Para a execução do generator e faz a execução ser resumida para onde foi chamado o generator
//O final do generator: faz retornar um IteratorResult com value = undefined e done = true (Não está claro ainda)
//Atingir uma declaração return