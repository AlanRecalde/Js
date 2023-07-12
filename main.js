
let nombreIngresado = prompt("Bienvenido, cual es tu nombre?");
alert("Hola " + nombreIngresado)

let compra = prompt(nombreIngresado + " " + "deseas comprar una moto?")

function comprarMoto(dinero){
const valorMoto = 600
            
if(dinero < valorMoto ){
    let noAlcanza = valorMoto - dinero;
    return "Para comprar la moto te falta: $" + noAlcanza
}else if(dinero > valorMoto){
    let vuelto = dinero - valorMoto;
    return "La moto es tuya. Y tu vuelto es: $" + vuelto 
}else if (dinero == valorMoto)
    return "la moto es tuya"
else{
    alert("no ingresaste un valor valido")
  }
}

while(compra != "si" && compra !="no"){
    alert("por favor ingresa si o no")
    compra = prompt("Desea comprar?")
}
if(compra == "si"){    
    alert(comprarMoto(prompt("ingresa tu dinero disponible")))
}else{
    alert("Hasta luego.")
}
