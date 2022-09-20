// for   // para
// while  // enquanto
// do-while //faça enquanto 


// for(inicialização; condição; incremento/decremento){
    // bloco ação
// }
// alert("Sua bomba vai explodir em: ");
// for(i = 0; i < 10; i++){
//     alert(i);
// }
// alert("Explodiu!!!!");

// let abacaxi = 0; // inicialização
// while(abacaxi < 5){ //condição
//     for(i = 0; i < 4; i++){
//         alert(i);
//     }
//     abacaxi++
//     alert("Sou While");
      
    // alert(abacaxi)
// }


  //inicialização
  //condição
  //incremento

//     let n = 0; //inicialização
//   while(n < x){ //condição 
//         alert(n)
//         n + 1 //incremento 
//   } 

// let i = 0;
// do{
//     alert(i);
//     i++;
// }while(i < 5);



/*Lista de exercícios (Laço de repetição)

                  PARA

1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.*/

/*let s, f, ft = 0, st= 0, ms = 0, mc = 0.0
for(i = 1; i <= 20; i++){
s=prompt("Digite o seu rendimento: ")
console.log(s)
f=prompt("Digite quantidade de filhos: ")
console.log(f)
st = parseFloat(st) + parseFloat(s)
ft = parseFloat(ft) + parseFloat(f)
if(s > ms){
ms = s
}
if(s <= 100){
mc++
}
}
alert("O maior salário é: " + ms)
alert("A média de filhos é: " + ft/20)
alert("A média do salário é: " + st/20)
alert("Percentual de pessoas com salário até R$ 100: " + (mc/20)*100 + "%")*/


/*2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no conjunto dos números de 1 até 500*/
/*
 let soma = 0
for(let i = 1; i <= 500; i++){
if(i % 2 == 1 && i % 3 == 0){
soma += i
}
}
alert("A soma é: " + soma)
 */

                           /*ENQUANTO

1- Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.*/

/*let n1, n2, n3, soma, media
n1 = prompt("Digite primeiro número: ")
n2 = prompt("Digite segundo número: ")
n3 = prompt("Digite terceiro número: ")
if(n1 <= 0, n2 <= 0, n3 <+ 0){
alert("Error")
}
while(n1 >= 0 && n2 >= 0 && n3 >=0){
soma =  parseInt(n1) + parseInt(n2) + parseInt(n3)
media = soma / 3		
alert("\nA soma é: " + soma + "\nA média é: " + media )
}
		
 */


/*2- Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por
três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário
digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135.
/*let N
N = prompt("Digite o número: ")
while(N <= 100){
N = N * 3
alert(N)
}
		
		 */

                            /*FAÇA...ENQUANTO

1- Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.*/

/*let num = 233
do{
if(num < 300 || num > 400) {
alert("\n" + num)
num = num + 5
}else {
alert("\n" + num)
num = num + 3
}
}while(num <= 456)*/

/*2- Faça um programa que pegue um número do teclado e calcule a soma de todos os
números de 1 até ele. Ex.: o usuário entra 7, o programa vai mostrar 28, pois
1+2+3+4+5+6+7=28.*/

/*let num, soma, total = 0
num = prompt("Digite um numero: ")
do{
total = parseInt(total) + parseInt(num)
num--
soma = num + num
alert(total)
}while(num > 0)
alert(total) */