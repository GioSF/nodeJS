//Callbacks são uma forma de garantir que certo
//código não será exectuado antes que outro
//código seja executado.
//Sem callbacks, nada em JS garante a ordem de
//execução de um código.

function estudar(text, callback){
    console.log('Estudando ' + text + '.');
    callback();
}

function fimTrabalho(){
    console.log('Fim de trabalho por hoje');
}

estudar('node', fimTrabalho);