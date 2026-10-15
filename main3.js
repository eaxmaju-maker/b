// CRIAR UM PROGRAMA QUE CONVERTA UMA TEMPERATURA DE CELSO PARA FAHREN

// F= (C x 1,8) + 32
// c = (F - 32) x 5/9
var temperatura = 10
var tipoTemperatura = "C"
var temperaturaConvertida = 0
// if so execulta se for positivo 
// if pergunta de sim ou não
if (tipoTemperatura =="C"){
    console.log("voce escolheu celsius!") 
    temperaturaConvertida = ((temperatura * 1.8) + 32)
 } else {
    console.log("voce escolheu Fahrenheit!")
    temperaturaConvertida = ((temperatura - 32) *(5/9))
 }


 console.log("o valor convertido é: " + temperaturaConvertida)