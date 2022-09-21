export class geladeira {
    marca: string;
    material: string;
    voltagem: string;
    gavetas: string;


    constructor(
    marca: string,
    material: string,
    voltagem: string,
    gavetas: string,
    
    ){
        this.marca = marca
        this.material = material
        this.voltagem = voltagem
        this.gavetas = gavetas
    }

    verInfor(){
        console.log(`As informações da geladeira são:
        A marca é: ${this.marca}
        O seu material é: ${this.material}
        A sua voltagem é: ${this.voltagem}
        quantidade de gaveta é: ${this.gavetas} `)
    }
    
}