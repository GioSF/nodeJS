function maiorQue(valor){
    return valor >= 5;
}

const filtro = [3,6,5,98,5,3.0,null].filter(maiorQue);

console.log(filtro);