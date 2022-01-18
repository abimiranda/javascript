//ejercicio 2 tp1
/*var base = prompt("ingrese el valor de la base") , altura = prompt("ingrese la altura")

var superficie

superficie = base * altura

console.log("el resultado es: " + superficie)

document.write("la superficie es de: " + superficie)*/

/*let sueldo1 = prompt("ingrese el sueldo del 1er empleado")
let sueldo2 = prompt("ingrese el sueldo del 2do empleado")
let sueldo3 = prompt("ingrese el sueldo del 3er empleado")
let promedio

promedio = (parseInt(sueldo1) + parseInt(sueldo2) + parseInt(sueldo3))/3

document.write(promedio)
console.log(promedio)*/

//EJERCICIO 7

/*let candidato1 = prompt("ingrese los votos obtenidos por el candidato 1")

let candidato2 = prompt("ingrese los votos obtenidos por el candidato 2")

let candidato3 = prompt("ingrese los votos obtenidos por el candidato 3")

let total, pc1, pc2, pc3

total = parseInt(candidato1) + parseInt(candidato2) + parseInt(candidato3)

pc1 = candidato1 * 100 / total
pc2 = candidato2 * 100 / total
pc3 = candidato3 * 100 / total

document.write("el candidato 1 obtuvo el " + pc1 + "% de los votos" )
document.write("el candidato 2 obtuvo el " + pc2 + "% de los votos")
document.write("el candidato 3 obtuvo el " + pc3 + "% de los votos")

//EJERCICIO 8 descuento del 15% en el total de la compra-

/*let total_compra = prompt("ingrese el total de la compra")

let p15, total_final

p15 = 15 * total_compra / 100

total_final = total_compra - p15

document.write("el total con el descuento aplicado es de: $" + total_final)*/

//ejercicio 10 y 11 de la biblioteca-
//para el 11 cree las variaboles pgral, ptec, psoc para ingresar el porcentaje que quiero gastar en c/u
//y los meti en la cuenta donde hago la regla de 3 simples

//para el 10 no existe pgral, ptec y psoc, y en donde hago la reglas de 3 simple en vez de escribirlas solo pongo en numeros el 
//porcentaje, ejemplo, 20 para decir 20%. en total debe sumar hasta 100%

/*let total= prompt("ingrese el dinero total destinado a la compra de libros")

let pgral = prompt("ingrese el porcentaje del dinero que quiere destinar a la compra de libros de interes gral")
let ptec = prompt("ingrese el porcentaje del dinero que quiere destinar a la compra de libros de tecnologia")
let psoc = prompt("ingrese el porcentaje del dinero que quiere destinar a la compra de libros de sociales")

let libros_gral, libros_tec, libros_soc


libros_gral = pgral * total / 100

libros_tec = ptec * total / 100

libros_soc = psoc * total /100

document.write(libros_gral, libros_tec, libros_soc)*/

//EJERCICIO 12 piezas fabricadas

/*let piezas_hora = prompt("Ingrese la cantidad de piezas que fabricará la máquina por hora")

let piezas_total = prompt("Ingrese la cantidad de piezas totales que hay que fabricar")

let hs_totales

hs_totales = piezas_total * 1 / piezas_hora

document.write(hs_totales)*/

/* EJERCICIO 13 Hacer un programa para ingresar por teclado el horario de ingreso y egreso de un
empleado a una empresa y luego indicar por pantalla la cantidad de minutos que trabajó.
Por ejemplo si la hora de ingreso es 7:55 y la hora de egreso es 18.00, se informará 605
minutos.
Nota: Para ingresar las 7:55 el programará los solicitará como dos datos por separado.*/

/* let horas_in = prompt ("ingrese la hora de entrada")
let minutos_in = prompt("ingrese los minutos de entrada")

let horas_out = prompt("igrese la hora de salida")
let minutos_out = prompt("ingrese los minutos de salida")

let hs_totales, min_totales, minutos_trabajados, hs_to_min // en las 1ras 2 variables calculos las horas y minutos por separado.
                                                            //en las 2 ultimas variables guardo el resultados de los minutos (las horas pasadas a min + los minutos por su cuenta)

hs_totales = parseInt(horas_out) - parseInt(horas_in) // calculo las horas trabajadas

if(parseInt(minutos_out) > parseInt(minutos_in)){  // si los minutos de la hora de salida son mayores a los de entrada
    min_totales = minutos_out - minutos_in // calculo normal, como las horas
}
else if (parseInt(minutos_out) < parseInt(minutos_in)) { // en cambio si es al reves, para que no me tire un numero negativo,  lo doy vuelta con un negativo adelante
    min_totales = minutos_out - minutos_in
    min_totales = -min_totales // el "-" pasa a positivo el numero
}

document.write(hs_totales + "hs y" + min_totales + "min") // asi la escribo en hs y min

hs_to_min = hs_totales * 60 / 1 // aca paso las horas a minutos

minutos_trabajados = hs_to_min + min_totales // aca sumo los minutos (horas) + los minutos normal

document.write (" Y LOS MINUTOS TRABAJADOS FUERON: " + minutos_trabajados) // imprimo por pantalla los minutos trabajados

*/

/* EJERCICIO 14 DE LAS MEDIALUNAS 

 la funcion math.trunc sirve para guardar el num como entero, sin las comas, 
 pero no redondea hacia arriba ni abajo */
 
/*let empanadas = prompt("¿Cuantas empanadas quiere comprar?")
let resto, docenas
let precio_docenas , empanadas_suelta , total 

docenas = Math.trunc(parseInt(empanadas)/12)
resto = Math.trunc(parseInt(empanadas)%12)
//document.write("son " + docenas + "docenas y " + resto + "empanadas sueltas")

precio_docenas = docenas * 2 / 1 //calculo el precio por docena

empanadas_suelta = resto * 0.20 // calculo el precio total de lo que sobra de la division (siempre el resto es menor a 12)

total = precio_docenas + empanadas_suelta

document.write("SON $" + total)*/

// EJERCICIO 15 converitr grados celsius a farenheit

/*let grados_c = prompt("ingrese grados celsius")

let grados_f

grados_f = 32 + (parseInt(grados_c) * 1.8)

document.write(grados_c + "°C son " + grados_f + "°F")*/

//EJERCICIO 16 pasar de farenheit a celsius

/*let grados_f = prompt("ingrese los grafos Fahrenheit para convertirlos a Celsius")

let grados_c

grados_c = (parseInt(grados_f) - 32) / 1.8

document.write(grados_f + "°F son " + grados_c + "°C")*/