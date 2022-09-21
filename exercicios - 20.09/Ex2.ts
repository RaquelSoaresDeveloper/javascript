export class conta {
    nome: string;
    endereço: string;
    cep: string;
    telefone: string;


    constructor(
    nome: string,
    endereço: string,
    cep: string,
    telefone: string,
        
    ){
        this.nome = nome
        this.endereço = endereço
        this.cep = cep
        this.telefone = telefone
    }

    verInfor(){
        console.log(`As informações do cliente são:
        Seu nome é: ${this.nome}
        Seu endereço é: ${this.endereço}
        Seu cep é: ${this.cep}
        Seu telefone é: ${this.telefone} `)
    }
    
}