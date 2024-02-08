
//var markHigherBMI = false;
//var markPeso = prompt("Ingresa el peso de Mark:");
//var markAltura = prompt("Ingresa la altura de Mark:");
//var johnPeso = prompt("Ingresa el peso de John:");
//var johnAltura = prompt("Ingresa la altura de John:");;

//var markBMI = markPeso / (markAltura * markAltura);
//var johnBMI = johnPeso / (johnAltura * johnAltura);

//console.log(markBMI);
//console.log(johnBMI);

//if (markBMI > johnBMI) {
//markHigherBMI = true;
// console.log("El BMI de Mark es más alto que el de John.");
//} else {
// console.log("El BMI de John es más alto que el de Mark.");
//}

function greet(nombre, oper, result) {
    console.log(`hola ${ nombre } tu ${ oper } es ${result}`);
}

function userInput(num1, num2, nombre, callback) {
    let sum = num1 + num2;
    let oper="suma"
    callback(num1, num2, nombre, greet);
}

function callback(num1, num2, nombre, callback) {
    let rest = num1 - num2;
    let oper = "resta"
    callback(nombre, oper, rest);
}

userInput(15, 30, "juan", callback);