/**************************************************** 
 * 
 *  Script para acelerar o playback dos vídeos
 * 
*****************************************************/


//Tive que digitar duas vezes essa linha no console, aqui só deixei uma:
let aula = document.getElementById("vjs-video_html5_api");

/*
"vjs-video_html5_api" é a ID do elemento, botão direito sobre o vídeo e clique
em "inspecionar"
*/

//Funções:
aulaNormal = () => {aula.playbackRate = 1;}
aulaRapida = () => {aula.playbackRate = 2;}

//Depois só passar pelo console as funções, essa acelera a velocidade da aula:
aulaRapida();

//Essa normaliza:
aulaNormal();
