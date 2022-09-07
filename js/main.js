//CALCULADORA INTERESES/CUOTAS
/*function monto1(){
    let monto1 = parseInt(prompt("ingresar que desea"));
    return monto1
}

function cuotas1(){
    let cuotas1 = parseInt(prompt("¿En cuantas cuotas quiere pagar? elija de 1 a 12"));
    return cuotas1
}

function intereses1(){
    let intereses1 = parseInt(prompt("¿Cual es la tasa de interes?"));
    return intereses1
}

let monto = monto1()
let cuotas = cuotas1()
let intereses = intereses1()

function totalInteres(){
    let interes = monto + (monto * (intereses * 0.01));
    return interes
}

function dividir(dato1, dato2){
    let resultado = dato1 / dato2;
    return resultado
}

let totalIntereses = totalInteres()
let totalCuotas = dividir(totalIntereses, cuotas).toFixed(2)

//Mostrar resultado
document.write("Usted debe pagar " + cuotas + " cuotas de " + totalCuotas)*/



//SIMULADOR PRESTAMOS INTERACTIVO
/*function Calcular() {
     const monto = document.querySelector("#cantidad").value;
  
     const tasaInteres = document.querySelector("#tasaInteres").value;
  
     const meses = document.querySelector("#meses").value;
     const intereses = (monto * (tasaInteres * 0.01)) / meses;
     const total = ((monto / meses) + intereses).toFixed(2)
  
     document.querySelector("#total")
       .innerHTML = "Total cuotas: ($)" + total;
}*/


//CALCULADORA
/*
const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
let operacion = prompt("¿Que operacion desea realizar? \n 1: suma, 2: resta, 3: division, 4: multiplicacion");
if(operacion == 1 || operacion == "suma") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = sumar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 2 || operacion == "resta") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = restar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 3 || operacion == "division") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = dividir(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if(operacion == 4 || operacion == "multiplicacion") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = multiplicar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else{
    alert("Seleccione un parametro correcto");
} */


//PREMIOS VENTAS
/*
while(true){
    let venta = prompt ('Introduzca el monto de venta entre 0 y 100:');
    if(venta > 100 || venta < 0 || isNaN(venta)){
                alert ('¡Error de entrada, vuelva a ingresar!');
        }else{
        if(venta == 100){
                alert ('Recompensa: un viaje para vos y un acompañante');
        break;
        }else if(venta>=80 && venta<=90){
                alert ('Recompensa: un iPhone');
        break;
        }else if(venta >=60 && venta<80){
                alert ('Tus ventas son muy bajas, sigue esforzandote');
        break;
        }else{
                alert ('Los resultados son muy malos');
        break;
        }
    }
}*/