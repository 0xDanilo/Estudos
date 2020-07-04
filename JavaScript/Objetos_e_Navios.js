
//Função que movimenta o suposto navio: 

function va_para_leste(direcao) {
    direcao.latitude = direcao.latitude + 1;
    direcao.longitude = direcao.longitude - 1;
}

/*Cria um objeto com as propriedades latitude e longitude, atribui os 
os valores "32" e "-64" para eles, respectivamente. */

let GPS = {
    latitude: 32,
    longitude: -64
};

console.log(`Estamos ancorados em [${GPS.latitude}, ${GPS.longitude}].`);

va_para_leste(GPS);
console.log(`Navegando!! Agora estamos em [${GPS.latitude}, ${GPS.longitude}].`);

va_para_leste(GPS);
console.log(`Navegando!! Agora estamos em [${GPS.latitude}, ${GPS.longitude}].`);

