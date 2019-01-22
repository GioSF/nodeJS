//Uma Primse é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Duas abordagens: 1) criação de Promises e 2) consumo de Promises

//Uma Promise e um objeto retornado ao qual pode-se anexar callbacks, ao invés de passar callbacks em uma função.

function sucessCallback(result){
    console.log('Arquivo salvo: ' + result);
}

function failureCallback(result){
    console.log('Arquivo não salvo: ' + result);
}

salvarArquivo(salvarSettings, sucessCallback, failureCallback);

//A função principal retorna um promisso ao qual (com o then) são anexados dosi callbacks
//Anexear dois callbacks para a execução do promise. then com dois parâmetros: The callback to execute when the promisse is resolved or failed
// Retorna um promise para completar de qualquer callback a ser executado

salvarArquivo(salvarSettings).then(sucessCallback,failureCallback);

const promise = salvarArquivo(salvarSettings);
promise.then(sucessCallback, failureCallback);

/*Ao constrário de callbacks old-style, passadas dentro da função, uma promisee traz algumas vantagens:
- Callbacks nunca serão chamados antes de completado a atual corrida do event loop JS
- Callbacks adicionadas com then(), mesmo depois de um sucesso ou falha da operação assíncrona, serão chamadas.
- Múltiplos callbacks podem ser adicionados ao se chamar then() várias vezes. Cada callback é executado após o outro, na ordem em que foram inseridos.
- chaining de promises
*/

/*Necessidade de criar duas ou mais operações assincronas detrás para a frente onde coda operação subsequente começa qdo a operação anterior termina com o resultado do passo anterior. Nos conseguimos isso criando uma promise chain.
o then() retorna um novo promise diferente do original.
*/
const promise = doSomething();
const promise2 = promise.then(sucessCallback, failureCallback);
//ou 

const promise3 = doSomething().then(sucessCallback, failureCallback);
/* O promise3 representa o termino não apenas de doSomething() mas tb do sucessCallback ou failureCallback que foi passado, o que pode ser outras funções assíncronas retonrando um promise. Nesse caso, qq callback adicionado ao promise3 fica enfileirado atrás do promise retonado ou pelo sucessCallback ou failureCallback.

Cada promise representa o término de um passo assíncrono na cadeia.

Antigamente, muitas operações assíncronas eram feitas com o callback piramid of doom:

fazerAlgo(function(result){
    fazerOutraCoisa(result, function(newResult){
        fazerTerceiraCoisa(newResult, function(finalResult){
            console.log("Resultado final: " + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

Atualmente:
*/

doSomethint(function(result){
    do2Something(result, function(newResult){
        do3Something(newResult, function(finalResult){
            console.log(finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

doSomething().then(function(result){
    return do2Something(result);
}).then(function(newResult){
    return do3Something(newResult);
}).then(function(finalResult){
    console.log(finalResult);
}).catch(failureCallback);

