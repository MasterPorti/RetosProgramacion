/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */



let num = [0, 1];
let num1;
let num2;
let num3;
for (i = 0;i<51;i++){
  let size = num.length 
  num1 = size -1
  num2 = num1 -1
  num3 = num[num1] + num[num2];
  num.push(num3)  
  console.log(num3) 
}