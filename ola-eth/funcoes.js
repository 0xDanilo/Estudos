import { ethers } from "./ethers-5.1.esm.min.js";
//const ethers = require('ethers')
      
// Conecta o ocbjeto window.ethereum injetado pela Metamask com a API Ethers.js
const provider = new ethers.providers.Web3Provider(window.ethereum);

//Explorando Ethers.js
async function explorandoEthersAPI(){
    //Recupera o número do ultimo:
    const numeroUltimoBloco = await provider.getBlockNumber();
    document.getElementById('numeroUltimoBloco').innerHTML = numeroUltimoBloco;

    //Confere se a rede está conectada:
    const statusDeRede = await ethereum.isConnected();
    if (statusDeRede == true){
      document.getElementById('statusDeRede').innerHTML = "Conectado";
    } else {
      document.getElementById('statusDeRede').innerHTML = "Desconectado";          
    }

    //Carrega as informações da rede atual (Ropstein)
    const infoRedeAtual =  await provider.getNetwork();
    //Aqui o retorno é convertido para uma string e escrito no HTML:
    //document.getElementById('infoRedeAtual').innerHTML = JSON.stringify(infoRedeAtual);
    
    //Capitaliza a primeira letra da propriedade "name" do objeto "infoRedeAtual" e armazena na constante:
    const nomeRede = infoRedeAtual.name;
    //Escreve no HTML o nome da rede
    document.getElementById('nomeRede').innerHTML = nomeRede;

    //Chamada ao ENS Resolver":
    const ensResolver =  await provider.lookupAddress("0x5555763613a12D8F3e73be831DFf8598089d3dCa");

    if (ensResolver == null){
      document.getElementById('ensResolver').innerHTML = "Endereço não encontrado na rede "+nomeRede+".";
    } else {
      document.getElementById('ensResolver').innerHTML = ensResolver;
    }

    //Escreve o retorno console para debug:
    console.log(infoRedeAtual);
    console.log(nomeRede);
    console.log(statusDeRede);
    console.log(numeroUltimoBloco);
    console.log(ensResolver);
  }

  explorandoEthersAPI();