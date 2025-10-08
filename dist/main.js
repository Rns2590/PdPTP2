"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("./Calculadora");
const CalculadoraPOO_1 = require("./CalculadoraPOO");
function main() {
    // Punto de entrada imperativo
    console.log("=== Calculadora ===");
    console.log("Suma 10 + 5:", (0, Calculadora_1.sumar)(10, 5));
    console.log("Resta 10 - 5:", (0, Calculadora_1.restar)(10, 5));
    console.log("Multiplicación 10 * 5:", (0, Calculadora_1.multiplicar)(10, 5));
    console.log("División 10 / 5:", (0, Calculadora_1.dividir)(10, 5));
    // Programación Orientada a Objetos
    const calc = new CalculadoraPOO_1.Calculadora();
    console.log("\n=== Calculadora (POO) ===");
    console.log("Suma 10 + 5:", calc.sumar(10, 5));
    console.log("Resta 10 - 5:", calc.restar(10, 5));
    console.log("Multiplicación 10 * 5:", calc.multiplicar(10, 5));
    console.log("División 10 / 5:", calc.dividir(10, 5));
    console.log("Potencia 2 ^ 3:", calc.potencia(2, 3));
}
main();
