function adicao(x) {
    console.log("x: " + x);
    return function (y) {
        console.log("y: " + y);
        return function(z){
            console.log("z: " + z);
            return x + y + z;
        };
    };

}
//A função adição() retorna uma subrotina aninhada (nested function) que possui recebe um parâmtero y.

var soma5 = adicao(5);
var soma52 = soma5(2);
//Aqui, a subrotina recebe o valor 2 como parâmetro. O valor 2 faz referência ao valor 5, que já esta armazenada no lexical environment mais externo.
var soma524 = soma52(4);
//Aqui, a subrotina mais interna recebe 4 como parâmetro. O valor 4 faz referência aos valores 5 e 2, que já estão armazenados em seus respectivos lexical environments.

console.log("soma5: " + soma5);
console.log("soma52: " + soma52);
console.log("soma524: " + soma524);

var soma2 = adicao(2);
console.log("2º soma2(): " + soma2);
//Aqui, a subrotina retornada por adição(2) não recebe parametro no 1º console. A variavel y é dada como undefined e a soma entre x e undefined resulta Nan

console.log("2º soma2(3): " + soma2(3));
