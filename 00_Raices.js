document.write("<h1>Raices De Una Ecuación Cuadráticas</h1>")
var a = prompt("Introduce el valor de a");
var b = prompt("Introduce el valor de b");
var c = prompt("Introduce el valor de c");

function valor1 (a, b, c){
    return (((-1)*b)+(Math.sqrt(Math.pow(b, 2)-(4*a*c))))/(2*a);
}

var rValor1 = valor1(a, b, c);
alert("Valor 1 = " + rValor1);


function valor2 (a, b, c){
    return (((-1)*b)-(Math.sqrt(Math.pow(b, 2)-(4*a*c))))/(2*a);
}

var rValor2 = valor2(a, b, c);
alert("Valor 2 = " + rValor2);