
var markHigherBMI = false;
var markPeso = prompt("Ingresa el peso de Mark:");
var markAltura = prompt("Ingresa la altura de Mark:");
var johnPeso = prompt("Ingresa el peso de John:");
var johnAltura = prompt("Ingresa la altura de John:");;

var markBMI = markPeso / (markAltura * markAltura);
var johnBMI = johnPeso / (johnAltura * johnAltura);

console.log(markBMI);
console.log(johnBMI);

if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log("El BMI de Mark es más alto que el de John.");
} else {
    console.log("El BMI de John es más alto que el de Mark.");
}