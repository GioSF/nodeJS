function first(){
    //Adição de delay
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();