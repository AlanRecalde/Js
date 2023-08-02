/* 
let nombreIngresado = prompt("Bienvenido, cual es tu nombre?");
alert("Hola " + nombreIngresado)

let compra = prompt(nombreIngresado + " " + "¿deseas comprar una moto?")

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

while (compra != "si" && compra !="no"){
    alert("Por favor, ingresa si o no")
    compra = prompt("¿Deseas comprar?")
}
if(compra == "si"){ 
    let dineroDisponible = parseFloat(prompt("ingresa tu dinero disponible"))
    while(isNaN(dineroDisponible)) {
        alert("Por favor, ingresa un valor mumerico")
        dineroDisponible = parseFloat(prompt("ingresa tu dinero dinero disponible"))
    }
    alert(comprarMoto(dineroDisponible))   
    
}else{
    alert("Hasta luego.")
}
 */


//Funcion Constructora

const Producto = function(marca, modelo, precio, stock){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
}


let producto1 = new Producto("yamaha", "ybr", 1545900,400)
let producto2 = new Producto("honda", "titan", 2540000,200)
let producto3 = new Producto("bmw", "bmw03", 4990000,20)
let producto4 = new Producto("bravo", "bravo01", 999000,1000)
let producto5 = new Producto("honda", "wave", 1200000,1500)



const lista = [producto1,producto2,producto3,producto4,producto5]

//console.log(lista.sort())

function filtrar(){
    let palabraFiltro = prompt("ingresa la marca de la moto que queres buscar").trim().toLowerCase()
    let resultado = lista.filter((producto)=> producto.marca.includes(palabraFiltro))
    
    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: " + palabraFiltro)
        return;
    }
}

function crearProducto(){
    let marca = prompt("ingresa la marca") 
    let modelo = prompt("ingresa lel modelo")
    let precio = parseFloat(prompt("ingresa el precio de la moto"))
    let stock = parseInt(prompt("ingresa la cantidad en stock"))

if( marca === "" || modelo === "" || isNaN(precio) || isNaN(stock)){
    alert("por favor ingresa valores validos")
    return;
}

let producto = new Producto(marca, modelo, precio, stock)
if(lista.some((existe)=> existe.marca === producto.marca)){
    alert("La moto ya existe en la lista!")
    return;
}
lista.push(producto)

console.table(lista)

}


