//Function Expression

var getRectArea = function(widht, height){
    return widht * height;
}

console.log(getRectArea(3, 7));

//Function Expressions em JS não são içadas (hoisted).
//Não podem ser usadas antes da definição.

//A principal diferença entre Function expression
// e Statement é o nome da função que pode ser
//omitido em Expressions para criar funções anônimas.

//Se quiser fazer referência a uma função corrente dentro 
//do corpo de uma função, é preciso criar uma Function
//Expression nomeada. esse nome será local apenas no
//escopo do corpo da função.

var math = {
    'factit': function factorial(n){
        console.log(n)
        if(n<=1){
            return 1;
        }
        return n * factorial(n-1);
    }
};

math.factit(3);

//É normalmente utilizada como callback

button.addEventListener('click', function(event){
    console.log('button clicked')
})

//A variável assinalada à Function Expression terá
//uma propriedade Name. O Name não muda se for atribuída a
//outra variável. Se o nome da função é omitido, será o 
//nome da variável (implicit name). Se a função
//possuir nome, será o nome da função (nome explícito).
// Isto se aplica também a Arrow Functions: elas não
// tem nome. Só é possível dar à variável um nome implícito.

var foo = function(){}
foo.name // "foo"

var foo2 = foo
foo2.name // "foo"

var baz = function bar(){}
baz.name // "bar"

console.log(foo == foo2); // true
console.log(typeof bar); // undefined
console.log(bar == baz); // false