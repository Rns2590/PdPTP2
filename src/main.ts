import { sumar, restar, multiplicar, dividir } from "./Calculadora";
import { Calculadora } from "./CalculadoraPOO";

function main(): void {
  // Punto de entrada imperativo
  console.log("=== Calculadora ===");
  console.log("Suma 10 + 5:", sumar(10, 5));
  console.log("Resta 10 - 5:", restar(10, 5));
  console.log("Multiplicación 10 * 5:", multiplicar(10, 5));
  console.log("División 10 / 5:", dividir(10, 5));

  // Programación Orientada a Objetos
  const calc = new Calculadora();
  console.log("\n=== Calculadora (POO) ===");
  console.log("Suma 10 + 5:", calc.sumar(10, 5));
  console.log("Resta 10 - 5:", calc.restar(10, 5));
  console.log("Multiplicación 10 * 5:", calc.multiplicar(10, 5));
  console.log("División 10 / 5:", calc.dividir(10, 5));
  console.log("Potencia 2 ^ 3:", calc.potencia(2, 3));
}

main();
