function multiplica(x,y){return x*y};  
function multiplica(x,y,z){return x*y*z};
//implicitamente ocorre
//var multiplica;
//multiplica = function(x,y) {return x * y;};
//multiplica = function(x,y,z){return x*y*z};
console.log(multiplica(2,4)); //NaN  
console.log(multiplica(2,4,8)); //64 

/* 
Nan demonstra que JS nãp retorna erro. Apenas multiplica z que é undefined
Declarar duas funções equivale a atribuí-la uma mesma variável.

- JS não há overloading
- é possível forjar overloading com o objeto Arguments
Como essa função poderia funcionar com 2 ou 3 elementos? */

function multiplica(x,y,z) {  
    if(arguments.length === 2) {
         return x*y;     
    }
    return x*y*z;  
}
console.log(multiplica(2,4));  //8  - overloading de 2 parâmetros  
console.log(multiplica(2,4,8));  //64  
console.log(multiplica(2,4,8,2));  //64

//Arguments - Array-like objects

function multiplica(){
    var length = arguments.length;
    var total = 1;

    if (length > 0){
        for(var i = 0; i < length; i++){
            total = total * arguments[i];
        }
        return total;
    }
    return 0;
}

console.log('multiplica' + multiplica());
console.log('multiplica' + multiplica(2,3,4));
console.log('multiplica' + multiplica(3));
console.log('multiplica' + multiplica(5,5));
console.log('multiplica' + multiplica(2,2,2,5));

//Arguments - escopo

function externa(){
    var argExterna = arguments;
    function interna(){
        console.log(argExterna.length);
        console.log(arguments.length);
    }
    interna();
}

externa(1,2,3);
externa(3);
