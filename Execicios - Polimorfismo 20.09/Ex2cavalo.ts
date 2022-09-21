export class Cavalo {
    nome: string;
      cor: string;
    idade: string;


    constructor(
    nome: string,
    cor: string,
    idade: string,
        
    ){
        this.nome = nome
        this.cor = cor
        this.idade = idade
    }

    verInfor(){
        console.log(`As informações do cavalo são:
        Seu nome é: ${this.nome}
        qual é a cor : ${this.cor}
        Sua idade é: ${this.idade} `)
    }
    
}