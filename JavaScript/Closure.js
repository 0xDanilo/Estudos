function multiplicador(fator) {
    return numero => numero * fator;
}

let dobro = multiplicador(2);
//Utilziei o operador "${}" e "``" para interagir com a string, 
console.log(`O dobro de 100 é ${dobro(100)}`);
