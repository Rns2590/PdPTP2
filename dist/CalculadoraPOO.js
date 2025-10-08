"use strict";
// // Programación Orientada a Objetos (Prototipado)
// export interface ICalculadora {
//   sumar(a: number, b: number): number;
//   restar(a: number, b: number): number;
//   multiplicar(a: number, b: number): number;
//   dividir(a: number, b: number): number;
//   potencia(a: number, b: number): number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
// Clase que implementa los pilares de la Programación Orientada a Objetos (POO):
// 1. Abstracción: define operaciones básicas a través de la interfaz ICalculadora.
// 2. Encapsulamiento: agrupa y oculta la lógica de las operaciones dentro de la clase.
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
    potencia(a, b) {
        return Math.pow(a, b);
    }
}
exports.Calculadora = Calculadora;
