function adicao(x) {
    console.log("x: " + x);
    return function (y) {
        console.log("y: " + y);
        return x + y;
    };

}
//A função adição() retorna uma subrotina aninhada (nested function) que possui recebe um parâmtero y.
var soma5 = adicao(5);
var soma52 = soma5(2);
console.log("1: " + soma52);
//Aqui, a subrotina recebe o valor 2 como parâmetro. O valor 2 faz referência ao valor 5, que já esta armazenada no lexical environment mais externo.
var soma5 = adicao(2);
console.log("2: " + soma5());
//Aqui, a subrotina retornada por adição(2) não recebe parametro. A variavel y é dada como undefined e a soma entre x e undefined resulta Nan