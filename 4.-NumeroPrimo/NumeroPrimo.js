/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

esPrimo(13);        //escribe tu numero aqui

function esPrimo(numero){
let sistema = "es primo";
    if (numero % 3 == 0){
        sistema = "no esprimo";
    }

    if (numero % 2 == 0){
        sistema = "no esprimo";
    }
    console.log(sistema)
}  




for (i =0; i<100; i++){
  
    if (i % 3 !== 0){

    if (i % 2 !== 0){
      console.log(i);
    }      
}

}
