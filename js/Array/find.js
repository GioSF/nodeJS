//find corre um vetor aplicando uma regra e retorna o primeiro elemento que retorna true a essa regra.

var vetor = [3,6,7,8,7,6,5];

var resultado = vetor.find(function(element){
    return element > 7;
});

console.log(resultado);

var usuario1 = [
    {idMusica: 423, timeStamp:'00:32:00, tue mar 23 2019'},
    {idMusica: 12, timeStamp:'00:32:00, tue dez 23 2018'},
    {idMusica: 43, timeStamp:'00:32:00, tue apr 23 2019'},
    {idMusica: 22, timeStamp:'00:32:00, tue may 23 2019'},
];
function buscaMusica(id, user){
    function qualMusica(user){
        return user.idMusica == id;
    }
    return user.find(qualMusica);
    
}
console.log(buscaMusica(423, usuario1));

//console.log(usuario1.find(qualMusica))