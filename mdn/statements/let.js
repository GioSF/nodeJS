/*Definição let: declara uma variável local de block scope com inicialização opcional
var: declara uma variável, inicialicar é opcional. Não possuem block scope
const: declara uma constante read-only
*/

let var1 = 3
    ,var2 = 4
    ,var 3 = 10;

/*Expressão let: qualquer unidade de código que determine um valor. Há dois tipos de expression: 1) atribuir valor, x = 7 e 2) determine um valor após uma avaliação, 3 + 5
JS possui 5 categorias de Expressions:
1) Aritmético
2) String
3) Lógico
4) Primary expressions: this
5) Left-hand-side expressions: 
    * new: operador que cria uma instância de um tipo de objeto definido pelo usuário
    * super: chama funções de dos pais do objeto. Útil em classes para chamar o contrutor dos pais
        super([arguments]); chama o construtor dos pais
        super.functionOnParent([arguments]);
    * Spread operator: expande uma expressão em situações onde múltiplos argumentos (para chamadas de funação) ou múltiplos elementos (para vetores) são esperados.
        Um novo vetores com elementos de outro vetor. É possível utilizar push, splice, concat. Ou outra forma mais sucinta:

        var parts = ['shoulders', 'knees'];
        var lyrics = ['head', parts, 'and'];

        function f(a, b, c){}
        var args = [1, 2, 4];
        f(args);

*/
let (var4 = 123
    , var5 = 234
    ,var6 = 456)
    expression;

/*Instrução let

Block: agrupa zero ou mais statements dentro de {}
var x = 1;
let y = 1;
const z = 1;
if(true){
    var x = 2;
    var y = 2;
    const z = 2;
}
console.log(x); loga 2
console.log(y); loga 1
console.log(z); loga 1 e não throw um SyntaxError: Identifier 'c' has already been declared pois ele foi declarado unicamente naquele bloco


*/
let (var7 = 654
    , var8 = 908
    , var9 = 6542)
    statement;