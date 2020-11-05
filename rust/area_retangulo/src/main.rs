#[derive(Debug)]
struct Retangulo {
    largura: u32,
    altura: u32,
}

impl Retangulo {
    fn area(&self) -> u32 {
        self.altura * self.largura
    }
}

impl Retangulo {
    fn cabe_dentro(&self, other: &Retangulo) -> bool {
        self.largura > other.largura && self.altura > other.altura
    }
}

fn main() {
    let retangulo1 = Retangulo {largura: 30, altura: 50};
    let retangulo2 = Retangulo {largura: 29, altura: 49};

    println!("O primeiro retangulo é: {:?}", retangulo1);
    println!("O segundo retangulo é: {:?}", retangulo2);


    println!("A área do primeiro retangulo é {} pixels quadrados.", retangulo1.area());
    println!("A área do segundo retangulo é {} pixels quadrados.", retangulo2.area());


    println!("O segundo retangulo cabe dentro do primeiro? {}", retangulo1.cabe_dentro(&retangulo2));
}

