const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("que operacion quieres realizar?");
let operacion = prompt ("1: sumar, 2: restar, 3: multiplicar, 4: dividir");


if (operacion == 1){
    let numero1 = prompt("Primer numero")
    let numero2 = prompt("Segundo numero")

    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}else if (operacion ==2){
    let numero1 = prompt("Primer numero")
    let numero2 = prompt("Segundo numero")

    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}else if (operacion == 3){
    let numero1 = prompt("Primer numero")
    let numero2 = prompt("Segundo numero")

    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}else if (operacion==4){
    let numero1 = prompt("Primer numero")
    let numero2 = prompt("Segundo numero")

    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}else{
    alert("la opcion es incorrecta")
}