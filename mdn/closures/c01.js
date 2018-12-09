function init() {

    var name = 'Firefox';

    function displayName() { //inner function, um closure
        alert(name);
    }

    displayName();
}

init();