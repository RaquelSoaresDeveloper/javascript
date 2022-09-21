export class Cliente {
    nome: string;
    idade: string;
    email: string;
    telefone: string;


    constructor(
    nome: string,
    idade: string,
    email: string,
    telefone: string,
        
    ){
        this.nome = nome
        this.idade = idade
        this.email = email
        this.telefone = telefone
    }

    verInfor(){
        console.log(`As informações do cliente são:
        O nome é: ${this.nome}
        qual sua idade: ${this.idade}
        Seu email é: ${this.email}
        Seu telefone é: ${this.telefone} `)
    }
    
}

