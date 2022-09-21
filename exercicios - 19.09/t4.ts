export class funcionario {
    nome: string;
    profissão: string;
    nacionalidades: string;
    


    constructor(
    nome: string,
    profissão: string,
    nacionalidade: string,
    
    
    ){
        this.nome = nome
        this.profissão = profissão
        this.nacionalidades = nacionalidade
    }

    verInfor(){
        console.log(`As informações da pessoa são:
        Seu nome é: ${this.nome}
        Sua profissão é: ${this.profissão}
        Sua nacionalidade é: ${this.nacionalidades} `)
    }
    
}