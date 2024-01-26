//prueba1 BMI 
//BMI = masa /altura /** 2 = masa / (altura * altura)

let markHigherBMI = true; 

let masaMark = prompt("Ingresa la masa Mark: ");
let alturaMark = prompt("Ingresa la altura Mark: ");


let masaJonh = prompt("Ingresa la masa de Jonh: ");
let alturaJonh = prompt("Ingresa la altura de Jonh: ");  


//  Calculo BMI
  function calcularBMI(peso, altura) {
    return peso / (altura * altura);
  }
  
  // Calcular el IMC de Mark y John
  let bmiMark = calcularBMI(masaMark, alturaMark);
  let bmiJohn = calcularBMI(masaJonh, alturaJonh);
  


  if (bmiMark >bmiJohn){
          console.log("el valor: " + markHigherBMI);
  }else{
    markHigherBMI = false;
    console.log("el valor: "+markHigherBMI);
  }
  
  // Mostrar los resultados
  console.log("El IMC de Mark es: " + bmiMark);
  console.log("El IMC de John es: " + bmiJohn);


