/*  Jogo de Craps. 
Faça um programa de implemente um jogo de Craps. 
O jogador lança um par de dados, obtendo um valor entre 2 e 12. 
Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou. 
Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu. 
Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto". 
Seu objetivo agora é continuar jogando os dados até tirar este número novamente. 
Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente.
*/

// Dependências
use rand::distributions::{Distribution, Uniform};
use std::io;

// Funções para o jogo
fn jogar(){
    print!("\x1B[2J\x1B[1;1H");
    // Gera números aleatórios utilizando a Distruibuição
    // Uniforme
    let mut rng = rand::thread_rng();
    let i = Uniform::from(2..12);
    let jogar_dados = i.sample(&mut rng);
    
    if (jogar_dados == 7) || (jogar_dados == 11) {
        println!("Você tirou {} e venceu!!\n", jogar_dados);
    } else if (jogar_dados == 2) || (jogar_dados == 3) || (jogar_dados == 12) {
        println!("CRAPS!! Você tirou {} perdeu. \n", jogar_dados);
        } else {
            println!("Ponto!! Você tirou {}!\nVamos para a segunda jogada...", jogar_dados);
            segunda_jogada(jogar_dados)
            }
}

fn segunda_jogada(x: i32) {
    let mut rng = rand::thread_rng();
    let i = Uniform::from(2..11);
    let jogar_dados = i.sample(&mut rng);
    
    if jogar_dados == 7 {
        println!("Você tirou {}.", jogar_dados);
        println!("Você tirou 7 antes de tirar {} e perdeu!!\n", x);
    } else if x == jogar_dados {
        println!("Você tirou {} novamente.", jogar_dados);
        println!("Você venceu!!\n");
        } else {
                println!("Você tirou {}", jogar_dados);
                segunda_jogada(x);
            }
}

fn mostrar_regras() {
    print!("\x1B[2J\x1B[1;1H"); 

    println!("As regras do jogo são:
    Dois dados são rolados a cada jogada.
    Se você tirar 7 ou 11, você venceu.
    Se tirar 2, 3 ou 12, você perdeu.
    Qualquer outro número, você seguirá rolando até achar o mesmo número novamente.
    Porém! Se achar 7 antes de achar o par correspondente, você perde.\n");
}

// Função principal
fn main() {
    // Variável
    let mut escolha;

    // Essa linha limpa a tela e coloca o cursor no topo 
    print!("\x1B[2J\x1B[1;1H"); 
    
    // Loop principal do jogo:
    loop{
    // Entrada de dados do usuário:
        println!("Digite 'y' para jogar, 'n' para sair ou '!' para ver as regras:");
        escolha = String::new();
        io::stdin().read_line(&mut escolha).expect("Erro ao criar string.");
        escolha = escolha.trim().parse().ok().expect("Erro ao ler string.");

        if escolha == "n" {
            break;
        }
        if escolha == "!" {
            mostrar_regras();
        }
        if escolha == "y"{
            jogar();
        }
    }
}
