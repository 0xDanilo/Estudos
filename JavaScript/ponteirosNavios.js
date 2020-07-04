function va_para_leste(lat, long) {
    lat.posicao = lat.posicao + 1;
    long.posicao = long.posicao - 1;
}

let latitude = {posicao: 32};
let longitude = {posicao: -64};

console.log(`Estamos ancorados em [${latitude.posicao}, ${longitude.posicao}].`);

va_para_leste(latitude, longitude);

console.log(`Navegando!! Agora estamos em [${latitude.posicao}, ${longitude.posicao}].`);