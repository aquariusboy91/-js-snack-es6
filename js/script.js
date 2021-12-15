// Scrivere una funzione (e lanciarla :razzo:) che 
// accetti tre argomenti, un array e due numeri
//  (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori 
// che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.






function arrayNumber () {
    let array1 = [2,3,4,5,6];
    let a = 2;
    let b = 6;
    let filtro = array1.filter(numero => numero > a && numero < b);
    return filtro
};

let print = arrayNumber();

console.log(print);