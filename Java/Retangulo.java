
class Retangulo{
    public int altura;
    public int largura;

// construtor
    public Retangulo(int altura, int largura) {
        this.altura = altura;
        this.largura = largura;
    }

// métodos
    public int area() {
        return this.altura * this.largura;
    }

    public boolean cabe_dentro(Retangulo x, Retangulo y) {
        return x.largura > y.largura && x.altura > y.altura;
    }

    public static void main(String[] args) {
        Retangulo retangulo1 = new Retangulo(30, 50);
        Retangulo retangulo2 = new Retangulo(29, 49);

        System.out.println(retangulo1.area());
        System.out.println(retangulo2.area());
        
        System.out.println("O primeiro retangulo cabe dentro do segundo? "+
        retangulo1.cabe_dentro(retangulo1, retangulo2));
    }
}

