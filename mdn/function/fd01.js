//A declaração de uma função (function statement)
//define uma função com parâmetros especificados

function calcRectArea(width, height){
    return width * height;
}

console.log(calcRectArea(20, 30));

//Uma função criada com declaração é um objeto
//Function e possui todos as propriedades, métodos
// e comportamentos de objetos Function


//Funcões declaradas em JS são içadas (hoisted) ao topo da
//função/escopo em que se encontra ou no topo do escopo
//global. Funções declaradas podem ser usadas
//antes de serem declaradas no código

hoisted();

function hoisted(){
    console.log('foo');
}

// Function Expressions não são hoisted:

notHoisted()// TypeError: notHoisted não é uma função

var notHoisted = function(){
    console.log('bar');
}

/* Uma function declaration é tb limitada ao escopo do bloco onde a declaração da função ocorre

foo('outside'); TypeError pois a função não existe
{
    function foo(text){
        console.log('foo foi chamada ' + text);
    }

    foo('inside');
}

Na verdade, a declaração da função dentro do bloco impede que ela seja içada ao topo do escopo. A função se comporta como se tivesse sido declarada como uma function expression