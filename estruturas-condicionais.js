// ex1
let temperatura = 10;

if (temperatura < 15) {
    console.log("Muito frio");
} else if (temperatura < 20) {
    console.log("Frio");
} else if (temperatura < 28) {
    console.log("Agradável");
} else {
    console.log("Muito quente");
}
console.log()

// ex2
let nota = 7;

if (nota >= 9) {
    console.log("Conceito A");
} else if (nota >= 7) {
    console.log("Conceito B");
} else if (nota>= 5) {
    console.log("Conceito C");
} else {
    console.log("Conceito D");
}
console.log()


// ex3
let DDS = 7;

if (DDS == 1) {
    console.log("Segunda-feira");
} else if (DDS== 2) {
    console.log("Terça-feira");
} else if (DDS == 3) {
    console.log("Quarta-feira");
} else if (DDS == 4){
    console.log("Quinta-feira");
} else if (DDS== 5) {
    console.log("Sexta-feira");
} else if (DDS == 6) {
    console.log("Sabado");
} else if (DDS == 7){
    console.log("Domingo");
} else {
    console.log("dia inválido")
}
console.log()

let peso = 80
let altura = 2.10

let imc = peso / (altura * altura )
console.log("IMC:", imc)

if (imc < 18.5 ) {
    console.log("Abaixo do peso ");
} else if (imc < 25) {
    console.log("peso normal");
} else if (imc < 30) {
    console.log("sobrepeso");
} else {
    console.log("obeso");
}