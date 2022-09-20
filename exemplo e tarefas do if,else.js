// let idade;

// idade = prompt("Qual é sua idade");

// if(idade <= 15){
//     alert("Já pode planejar a festa de 15 anos");
// }else if(idade >= 18){
//     alert("Já pode sair de casa");
// }else{
//     alert("Tá quase lá");
// }


// let aldeia
// aldeia = prompt("Qual aldeia você precisa destruir" + "\nFolha" + "\nAreia" + "\nNevoa" + "\nSom");
// switch(aldeia){
//     case "folha": alert("Os ninjas dela são Naruto, Kakashi, Sasuke, Sakura, Ino, Tsunade, Rocklee");
//     break;
//     case "Areia": alert("Os ninjas dela são  Gaara, Temari, Kankuro, Sasori");
//     break;
//     case "Nevoa": alert("Zabuza, Haku, Kisame,Suigetsu");
//     break;
//     case "Som": alert("Orochimaru, Kimimaru, Kabuto, Log");
//     break;
// }





/*1) João, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
Toda vez que ele traz um peso de tomate maior que o estabelecido pelo regulamento do estado de 
São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo excedente. 
João precisa que você faça um sistema que leia a variável P (peso de tomates) e verifique se há excesso. 
Se houver, gravar na variável E (Excesso) e na variável M o valor da multa que João deverá pagar. 
Caso contrário mostrar tais variáveis com o conteúdo ZERO.*/

/*let peso,excesso,multa
//alert (peso)
//onsole.log (peso)
//alert (excesso)
//console.log (excesso)
//alert (multa)
console.log (multa)
peso = prompt ("digite o peso ");
if (peso >=50 );
excesso = peso - 50
excesso = prompt ("qual foi o excesso? ");
alert (excesso)
multa = excesso * 4
alert ("sua multa é " + multa)*/

/*2) Elabore um sistema que leia as variáveis C e N, respectivamente código e número de horas trabalhadas 
 um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00 por hora. 
 Quando o número de horas exceder a 50 calcule o excesso de pagamento armazenando-o na variável E, 
 caso contrário zerar tal variável. A hora excedente de trabalho vale R$ 20,00. 
 No final do processamento imprimir o salário total e o salário excedente.*/

 /*let c,n,e,s
 //alert (c)
 //console.log (c)
 //alert (n)
 //console.log (n)
 //alert (e)
 //console.log (e)
 //alert (s)
 //console.log (s)
 c = prompt ("escreva suas horas trabalhadas por dia ")
 n = prompt ("qual sua carga horaria? " )
 e = n * 50
 if (n >= 50){
    e = e*20
    alert ("seu excedente foi ")
 }
 else if (n <= 50){
    s = n*10
    alert ("qual o seu salario? " + s)
 }*/

 /*3) Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados.*/

/*let n1,n2,n3,n4,a,b,c,d
n1 = prompt ("digite um numero: ")
alert (n1)
n2 = prompt ("digite um numero: ")
alert (n2)
n3 = prompt ("digite um numero: ")
alert (n3)
n4 = prompt ("digite um numero: ")
alert (n4)
a = n1
b = n2
c = n3
d = n4
if(n3 >= 1000){
    alert ("seu valor é: " + c)
}else {
   alert("seus valores são" + "\n" + a + "\n" + b + "\n" + c + "\n" + d)
}*/

/*4) Faça um sistema que leia um número inteiro e 
mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.*/

/*let numero,resultado
numero = prompt ("digite um numero ")
resultado = numero % 4
if (resultado == 2){
    alert ("o numero é par ")
}   else{
    alert ("o numero é ímpar ")
}
let A,b
A = 14
b = 23
alert ("A é igual b? " + A == b)
alert("o valor de A é diferente " + A != b)*/

/*5) A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de indústrias que são 
altamente poluentes do meio ambiente. O índice de poluição aceitável varia de 0,05 até 0,25. 
Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a suspenderem suas atividades, se o
índice crescer para 0,4 as industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades, 
se o índice atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades. 
um sistema que leia o índice de poluição medido e emita a notificação adequada aos diferentes grupos
de empresas.*/

 /*let  ind
 ind = prompt ("digite o indiceda poluição ")
 if( ind < 0.3){
    alert ("o indide é aceitave")
 }else if(ind < 0.4)
    alert ("1º Grupo notifica, atividade encerrada ");{
 } if(ind < 0.5 ){
    alert("o grupo 1º e 2º suspender as atividades")
 }else ("todos os grupos,suspendam a atividades");*/
 

 /*6) Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes categorias:
 Infantil A = 5 a 7 anos
 Infantil B = 8 a 11 anos
 Juvenil A = 12 a 13 anos
 Juvenil B = 14 a 17 anos
 Adultos = Maiores de 18 anos*/

 /*let idade
 idade = prompt ("qual é sua idade? ")
if ("idade >= 5 e idade <= 7"){
    alert ("infantil A")
}
else{ ("idade >= 8 e idade <= 11")
    alert ("infantil B")
}

    ("idade >= 12 e <= 13")
    alert ("juvenil A")
    
    falta terminar*/

/*7) Receber valores de base e altura de um triângulo e verificar se são valores válidos 
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.

/* let b, a, area
b=prompt("Insira valor da base: ")
console.log(b)
a=prompt("\nInsira valor da altura: ")
console.log(a)
if(b > 0 || a > 0) {
area = (b*a)/2
alert("\nA área do triangulo é: " + area)	
}
*/

/*8) Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma 
for maior que 100, caso contrário imprimi-la com o valor zero.*/

/*let n
n=prompt("Escreva seu número: ")
console.log(n)
if(n >= 100){
alert("\nImprimir")
}else if(n <= 99){
alert("\n0")
}*/



