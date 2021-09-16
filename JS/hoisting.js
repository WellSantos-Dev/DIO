// Hoisting: Levantar ou suspender algo

function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text)
}

fn();