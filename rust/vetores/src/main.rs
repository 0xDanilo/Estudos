// Função que recebe um vetor como referência (&) e imprime seus elementos
fn imprime_vetor(vetor: &Vec<i32>) {
    for i in vetor {
        println!("{}", i);
    }
    println!("\n");
}

fn main() {
// Declara um vetor com elementos definidos:
    let vetor = vec![1, 200, 3];
// Declara um vetos mutável sem elementos definidos
    let mut vetor2: Vec<i32> = Vec::new();
/* Passa o vetor como referência para a função, não fosse
a rerência o valor da variável passaria a perterncer a função
e ele não poderia ser utilizado posteriormente.
*/
    imprime_vetor(&vetor);
// Adiciona elementos no vetor através de um loop
    for i in 0..20 {
        vetor2.push(i);
    }
// Adicona um elemento através do método /push
    vetor2.push(6);

    imprime_vetor(&vetor2);
// Imprime os elementos dentro do vetor, melhor do que na função acima.
    println!("Elementos no vetor: \n{:?}", vetor2); // "{:?}" já que o vetor não suporta 'Display'
    println!("\nQuantidade de elementos no vetor: {:?}", vetor2.len()); 
}
