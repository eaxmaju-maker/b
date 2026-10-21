 //  Crie um programa que determine se um ano é bissexto

 var anoUsuario = 2024

 console.log (anoUsuario)

 if (anoUsuario % 400 == 0){ 
    console.log("o ano pode ser bissexto")
 } if(anoUsuario % 100 == 0){
    console.log("o ano não pode ser bissexto")
 }

if(anoUsuario % 4 == 0){
    console.log("o ano e bissexto")
}else{
    console.log("o ano não pode ser bissexto")
}