var arr = [
    {id: 2},
    {id: 3},
    {id: 76},
    {},
    {id: ''},
    {id: null},
    {id: NaN},
    {id: 'undefined'}
];

var entradasInvalidas = 0;

//Definição do filtro. Vai para o novo array aquilo que for true.
function filtrarPorId(obj){
    if('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)){
        return true;
    } else {
        entradasInvalidas++;
        return false;
    }
}

var arrFiltro = arr.filter(filtrarPorId);

console.log(arrFiltro);
console.log(entradasInvalidas);