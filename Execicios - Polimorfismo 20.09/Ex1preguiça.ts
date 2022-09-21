import { Animal } from "./Ex1animal";

export class Preguiça extends Animal{
    raca: string;
    cor: string;

    constructor(
        raca: string,
        cor: string,
        especie: string,
        idade: number,
        familia: string,
        nome: string
    ){
       super(especie, idade, familia, nome)
       this.raca = raca 
        this.cor = cor 
    }

    correr(){}
    

    dormir(){
        console.log("Dormindo igual a uma preguiça")
    }

    cacar(){}


}