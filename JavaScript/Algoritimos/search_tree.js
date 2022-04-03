//const chaveParaBuscaDOM = document.querySelector('.chaveParaBusca');

const array = ['Telefone 1: 1234', 'Telefone 2: 8046 ou 8047', "he", "he-man"];

const buscarTelefone = (chave) => {
    return array.filter(el => el.toLowerCase().indexOf(chave.toLowerCase()) > -1);   
  };
  

console.log(buscarTelefone('a'));


//chaveParaBuscaDOM.addEventListener('input', ()=> {
//    buscarTelefone();
//});
