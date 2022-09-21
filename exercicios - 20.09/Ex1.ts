export class patinete {
    nome: string;
      cor: string;
    velocidade: string;
    fabricante: string;


    constructor(
    nome: string,
    cor: string,
    velocidade: string,
    fabricante: string,
        
    ){
        this.nome = nome
        this.cor = cor
        this.velocidade = velocidade
        this.fabricante = fabricante
    }

    verInfor(){
        console.log(`As informações do patinete são:
        O nome da marca é: ${this.nome}
        qual é a cor : ${this.cor}
        Sua velocidade é: ${this.velocidade}
        Seu fabricante é: ${this.fabricante} `)
    }
    
}