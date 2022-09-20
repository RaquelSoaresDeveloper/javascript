/* functions
chamada, parametro, ação, retorno;
let n1, n2 resultado
n1= prompt ("Digite um numero: ")
n2= prompt ("Digite o segundo numero: ")
fuction abacaxi (n1, n2){
    resultado = parseInt(n1) + parseInt(n2)
    return alert (resultado)
    abacaxi (n1,n2)
}

do{
    opcao = mostrarMenu()
}while(opcao != 2)

function mostrarMenu(){
    entrada = ""
    alert ("== Mostrar Menu == " + 
    "/n1 - Mostrar Menu" +
    "/n2 - Sair")
    return entrada = prompt()
}

*/


/* 1 - Criar uma função para calcular a 
porcentagem de um número*/

/*let c,p,resultado
c = prompt ("escreva um numero: ")
p = prompt ("escreva uma porcentagem: ")
function calculadora (c,p){
    resultado = parseInt(c)*parseInt(p)/100   |parseInt é para n° inteiro|
    return resultado
}
alert ("a porcentagem de " + c +"\né " + calculadora (c,p))*/

/*2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit*/
/*let c,f,resultado
c = prompt ("escreva o numero em Celsius ")

 function conversor (c,f,resultado){
    resultado = (parseFloat (c) * 1.8 + 32) |parseFloat é para n° quebrado|
    return resultado
 }
 alert ("A conversão é " + conversor (c,f))*/

/*3 -  Criar uma função que converta uma 
temperatura de Fahrenheit para Celsius*/

/*let f,c,resultado
f = prompt("escreva o numero em fahrenheit ")

 function conversão (f,c,resultado){
    resultado = (parseFloat (f)  -9) / 5 
    return  resultado
}
alert ("A conversão é " + conversão (f,c))*/

/*4 - Crie uma um programa de saúde, nesse programa desenvolva uma função que 
calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.*/

/*let peso, altura,resultado
peso = prompt ("qual seu peso? ")
altura = prompt ("qual é sua altura?")

function imc (peso,altura){
    resultado = parseFloat(peso) / (parseFloat(altura) * parseFloat (altura))
    return resultado
}
alert ("seu resultado é " + imc (peso,altura))*/

/*1 - Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra 
função.*/

/*let R1,F2,B3,resulMax,resulMin
R1 = prompt ("digite um numero: ")
F2 = prompt ("digite um numero: ")
B3 = prompt ("digite um numero: ")

function resulMax (R1,F2,B3){
    resulMax = Math.max (R1,F2,B3)
    return resulMax
}

function resulMin (R1,F2,B3){
    resulMin = Math.min (R1,F2,B3)
    return resulMin
}
alert ("O maior numero é " + resulMax (R1,F2,B3))
alert ("O menor numero é " + resulMin (R1,F2,B3))*/


/*2 - Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, 
que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
A função “altera” o valor de custo para incluir o imposto sobre vendas.*/

/*let soma=0, porcentagem=0, taxaImposto=0, custo=0, total=0
custo = prompt("Insira o valor aqui: ")
taxaImposto = prompt("Qual a porcentagem de imposto: ")

function somaImposto(custo, taxaImposto){
   
porcentagem = taxaImposto / 100
soma = parseFloat(custo) * parseFloat(porcentagem)

total = parseFloat(custo) + parseFloat(soma)
return (alert(total.toFixed(2)))
}
somaImposto(custo, taxaImposto);*/


/*3 - Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve 
converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a 
conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, 
a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. 
Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que 
desejar.*/

/*let hora, minuto, conversão
hora = prompt("Digite a hora: ")
minuto = prompt("Digite os minutos: ")

function converter_hora(hora){
    if(hora >= 12){
    conversão = hora - 12
    return (conversão)
    }
}

function imprime_hora(hora, minuto) {
    if (hora <= 12) {
        alert("São" +  hora +  "horas" +  "e " +  minuto +  "minutos" +  "AM")
    } else {
        alert("São" +  converter_hora(hora) +  "horas" +  "e" + minuto +  "PM");
    }
}
    imprime_hora(hora, minuto);*/

/*4 - Criar uma função para calcular a porcentagem de um número*/

/*let n, pctg, cal1, cal2
n = prompt("Digite o número: ");
pctg = prompt("Digite a porcentagem: ");

function porcentagem(){

cal1 = pctg / 100;
cal2 = n * cal1;
return alert(cal2);

}

porcentagem()*/


/*5 -  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a 
soma, subtração, multiplicação e divisão desses valores.*/

/*let n1, n2, cal1, cal2, cal3
n1 = prompt("Digite o primeiro número: ");
n2 = prompt("Digite o segundo número: ");

function SMD (){

cal1 = parseInt(n1) + parseInt(n2)
cal2 = parseInt(n1) * parseInt(n2)
cal3 = parseInt(n1) / parseInt(n2)
return alert("Subtração: "+cal1+"\nMultiplicação: "+cal2+"\nDivisão: "+cal3);

}

SMD()*/

/*6 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, 
se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.*/

/*let n
n = prompt("Insira o número do mês: ")

function mes(n){

        if(n == 1, n == 01){
        alert("Seu mês é: Janeiro")
    }
        
        if(n == 2, n == 02){
        alert("Seu mês é: Fevereiro")
    }
       
        if(n == 3, n == 03){
        alert("Seu mês é: Março")
    }
        
        if(n == 4, n == 04){
        alert("Seu mês é: Abril")
    }
        
        if(n == 5, n == 05){
        alert("Seu mês é: Maio")
    }
        
        if(n == 6, n == 06){
        alert("Seu mês é: Junho")
    }
        
        if(n == 7, n == 07){
        alert("Seu mês é: Julho")
    }
        
        if(n == 8, n == 08){
        alert("Seu mês é: Agosto")
    }
        
        if(n == 9, n == 09){
        alert("Seu mês é: Setembro")
    }
        
        if(n == 10){
        alert("Seu mês é: Outubro")
    }
        
        if(n == 11){
        alert("Seu mês é: Novembro")
    }
        
        if(n == 12){
        alert("Seu mês é: Dezembro")
    }
}
mes(n)*/
