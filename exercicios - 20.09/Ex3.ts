export class paciente {
    nome: string;
    endereço: string;
    cpf: string;
    telefone: string;


    constructor(
    nome: string,
    endereço: string,
    cpf: string,
    telefone: string,
        
    ){
        this.nome = nome
        this.endereço = endereço
        this.cpf = cpf
        this.telefone = telefone
    }

    verInfor(){
        console.log(`As informações do paciente são:
        Seu nome é: ${this.nome}
        Seu endereço é: ${this.endereço}
        Seu cpf é: ${this.cpf}
        Seu telefone é: ${this.telefone} `)
    }
    
}