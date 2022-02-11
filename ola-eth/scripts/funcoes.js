import { ethers, utils } from "./ethers-5.5.4.esm.min.js";
//const ethers = require('ethers')
      
//Conecta o ocbjeto window.ethereum injetado pela Metamask com a API Ethers.js
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Constantes para manipular a DOM
const DOMnumeroUltimoBloco = document.querySelector('.numeroUltimoBloco');
const DOMstatusRede = document.querySelector('.statusDeRede');
const DOMnomeRede = document.querySelector('.nomeRede');
const DOMensResolver = document.querySelector('.ensResolver');
const DOMtarifaMedia = document.querySelector('.tarifaMedia');

//Explorando Ethers.js
async function explorandoEthersAPI(){
    //Recupera o número do ultimo:
    const numeroUltimoBloco = await provider.getBlockNumber();
    DOMnumeroUltimoBloco.textContent = numeroUltimoBloco;

    //Confere se a rede está conectada:
    const statusDeRede = await ethereum.isConnected();
    if (statusDeRede == true){
      DOMstatusRede.textContent = 'Conectado';
    } else {
      DOMstatusRede.textContent = "Desconectado";          
    }

    //Carrega as informações da rede atual (Ropstein)
    const infoRedeAtual =  await provider.getNetwork();
    //Aqui o retorno é convertido para uma string e escrito no HTML:
    //document.getElementById('infoRedeAtual').innerHTML = JSON.stringify(infoRedeAtual);
    
    //Capitaliza a primeira letra da propriedade "name" do objeto "infoRedeAtual" e armazena na constante:
    const nomeRede = infoRedeAtual.name;
    //Escreve no HTML o nome da rede
    DOMnomeRede.textContent = nomeRede;

    //Chamada ao ENS Resolver":
    const ensResolver =  await provider.lookupAddress("0x5555763613a12D8F3e73be831DFf8598089d3dCa");

    if (ensResolver == null){
      DOMensResolver.textContent = "Endereço não encontrado na rede "+nomeRede+".";
    } else {
      DOMensResolver.textContent = ensResolver;
    }

    const tarifaMedia = Math.floor(utils.formatUnits(await provider.getGasPrice(), "gwei"));
    DOMtarifaMedia.textContent = tarifaMedia;

    const tarifaNova = await provider.getFeeData();


   

    //Escreve o retorno console para debug:
    console.log(infoRedeAtual);
    console.log(nomeRede);
    console.log(statusDeRede);
    console.log(numeroUltimoBloco);
    console.log(ensResolver);
    console.log(tarifaMedia);
    console.log(utils.formatUnits(tarifaNova.maxFeePerGas, 'gwei'));
  }
  
  explorandoEthersAPI();