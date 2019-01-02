//O método Array.from() cria uma nova instância de Array, "superficialmente copiada", de um tipo array ou objeto iterable (Map e Set).

//Array de String
console.log("1: " + Array.from('mensagem'));

//Array de Set
var s = new Set(['foo', 'window']);
console.log("2: " + Array.from(s));
// ["foo", window]

//Array de Map

var m = new Map([[1, 2], [2, 4], [4, 8]]);
console.log("3: " + Array.from(m));
var x = 'asd';
var y = 123;
var mapper = new Map([['1', 'a'], [y, x]]);

// .values() retorna um iterable dos valores em um Map
// .keys() retorna um iterable dos keys no Map
//Cria um Array de um objeto iterable
console.log("4: " + Array.from(mapper.values()));
console.log("5: " + Array.from(mapper.keys()));

//Array de um objeto Array-like (arguments)
function f() {
    return Array.from(arguments);
}
console.log("6: " + f(1, 5, 3, 8, 5));
console.log("7: " + typeof (f(1, 5, 3, 8, 5)));

//Utilizando arrow functions em Array.from()
console.log("8: " + Array.from([23, 4, 'e', 1], x => x + x));
console.log("9: " + Array.from([23, 4, 'e', 1],
    x => (Array.from([23, 4, 'e', 1], y => y + y) + x)
)
);
//argumentos: iterable, mapfn que será chamada em cada elemento do array
//v: value  e k:keys
console.log(Array.from({length:7},(v,k) => k));
console.log(Array.from({length:7},(v,k) => v));

//Função de gerador de sequência

const range = (inicio, fim, passo) => Array.from({length: (inicio - fim) / passo}, (_,i) => inicio + (i * passo));

// Gerar números entre 0..4 (REVER)
range(0, 5, 1);
// [0, 1, 2, 3, 4]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
var retorno = range('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1, 1).map(x => String.fromCharCode(x));

// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]