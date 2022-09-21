export class cachorro {
    nome: string;
      cor: string;
    idade: string;
    raça: string

    constructor(
    nome: string,
    cor: string,
    idade: string,
    raça: string
    ){
        this.nome = nome
        this.cor = cor
        this.idade = idade
        this.raça = raça
    }

    verInfor(){
        console.log(`As informações do cachorro são:
        Seu nome é: ${this.nome}
        qual é a cor : ${this.cor}
        Sua idade é: ${this.idade}
        Sua raça é: ${this.raça} `)
    }
    
}