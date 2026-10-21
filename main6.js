//Escreva um programa que leia o salário de um funcionário e aplique um aumento de acordo com a seguinte regra: salários menores que R$1000 recebem 20% de aumento, entre R$1000 e R$2000 recebem 15%, e acima de R$2000 recebem 10%.
var salario = 2000
var SalarioFinal= 0

if (salario < 1000){
    SalarioFinal=(salario * 0.20) + salario
}else{

}if( salario > 2000){
    SalarioFinal=(salario * 0.15) + salario
}else{
    SalarioFinal=(salario * 0.10) + salario
 }

console.log(SalarioFinal)