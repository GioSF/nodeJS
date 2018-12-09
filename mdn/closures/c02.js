function init(){

    var text = 'Firefox';

    function message(){
        alert(text);
    }

    return message;

}
//Mesmo após o término da função init a variável text permanece acessível. Isso por que o js ria um enclosure, uma combinação de função e ambiente léxico dentro do qual a função é declarasa. Esse ambiente inclui variáveis locais que estivessem no escopo no tempo de criação do closure.

var inst = init();
inst();