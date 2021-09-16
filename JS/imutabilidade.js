
let user = {
    nome: "Wellington",
    sobrenome: "Matheus",
    idade: 10
}

function getUserWithName(user) {
    return {
        ...user,   // Spread Operator
        fullName: `${user.nome} ${user.sobrenome}`
    }
}

const userWithFullName = getUserWithName(user);

console.log(userWithFullName);


// Praticando
const credencials = {
    nome: "Wellington",
    sobrenome: "Matheus",
    idade: 19,
    password: "123"
}


function getCredencials(credenciais) {
    return {
        ...credenciais,
        userPass: `${credenciais.nome} ${credenciais.password}`
    }
}


let newCredencial = getCredencials(credencials)

console.log(newCredencial)

// Praticando mais um pouco 

const carro = {
    rodas: 4,
    cor: 'preto',
    blindado: true,
    ligar() {
        if (this.rodas === 4) {
            console.log("VRUUUUUUUUUM :D")
        } else {
            console.log("Erro. Verifique as rodas.");
        }
    }
}

function getCar(carro) {
    return {
        ...carro,
        descricao: `O carro é ${carro.cor} e possui ${carro.rodas} rodas`
    }
}

let newCar = getCar(carro);

console.log(newCar)

console.log(carro.ligar())