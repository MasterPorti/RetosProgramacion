const palabra1 = "paco";
const palabra2 = "apoc";
const TamanoTotal = palabra1.length;
const romper = TamanoTotal + 1;
console.log(palabra1.length)

let suma = 0;
let darkList1 = [];
let darkList2 = [];

if (palabra1.length == palabra2.length){                              //Comprueba si tiene los mismos caracteres si no significa que no es un anagrama y se descarta

    for (i = 0 ; i < TamanoTotal ; i++ ){                            // se crea un ciclo que lo que ocasiona es que se repetia ol misma cantida de caracteres que de ciclos
        for(o = 0; o < TamanoTotal; o++){                           // se crea un for los mismos ciclos para crear una variable que use para la comparacion de abajo de if
            if (palabra1.charAt(i) == palabra2.charAt(o)){          // si no son los mismos caracteres de la palabra se vuelven a repetir con todas las posibilidades
                suma++;                                             // una variable de control al fina si esta variable es igual a la cantidad de caracteres significara que si va a ser un anagrama 
                let infoDarkList1 = darkList1.includes(o);          // se crea una variable para saber si ya se habia usado ese caracter antes
                if (infoDarkList1 == true){                         // si ya se habia se resta 1 a la variable de control
                    suma--;
                }  
                if (infoDarkList1 == false){                         // si no se habia usado antes de escribe en la lista negra esa combinacion para que no se vuelva a usa
                    darkList1.push(o)
                    o = romper;                                     // rompe el if primer if para que no se sigan agregando mas numero a la lista negra                  
                }  
            }
        }  
   }    
} else{
    console.log('no es un anagrama')                                // como no tiene el mismo numero de caracteres no es un anagrama 🔴
}
if(suma == TamanoTotal){
    console.log('es un anagrama')                                   // la variable de control tiene los mismos caracteres entonces si es un anagrama 🟢
} else{
    console.log('no es un anagrama')                                // la varible de control y el tamaño total de caracteres no es el mismo  no es un anagrama 🔴
}
