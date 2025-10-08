
// Clase que implementa los pilares de la Programación Orientada a Objetos (POO):
// 1. Abstracción: define operaciones básicas a través de la interfaz ICalculadora.
// 2. Encapsulamiento: agrupa y oculta la lógica de las operaciones dentro de la clase.
export class Calculadora {
  sumar(a: number, b: number): number {
    return a + b;
  }
  restar(a: number, b: number): number {
    return a - b;
  }
  multiplicar(a: number, b: number): number {
    return a * b;
  }
  dividir(a: number, b: number): number {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return a / b;
  }
  potencia(a: number, b: number): number {
    return Math.pow(a, b);
  }
} 

