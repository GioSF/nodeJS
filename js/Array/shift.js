//shift remove primeiro elemento do vetor. geralmente utilizado dentro de um loop até que uma condição seja atendida.

var nomes = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = nomes.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John

var usuario1 = [
    {idMusica: 423, timeStamp:'00:32:00, tue mar 23 2019'},
    {idMusica: 12, timeStamp:'00:32:00, tue dez 23 2018'},
    {idMusica: 43, timeStamp:'00:32:00, tue apr 23 2019'},
    {idMusica: 22, timeStamp:'00:32:00, tue may 23 2019'},
];

//percorre e remove elementos de usuario1 até que o array termine
while( (i = usuario1.shift()) !== undefined ) {
//quando o elemento removido por shift tem idMusica==22, isso vai pro console
    if(i.idMusica == 22){
    console.log(i.idMusica);
    }
}