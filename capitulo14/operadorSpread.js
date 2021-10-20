
//este operador ayuda a destructurar un array

let valor1 = "valor 1";
let valor2 = "valor 2";
let valor3 = "valor 3";

let arr = ["valor 1", "valor 2","valor 3"];
console.log(valor1,valor2,valor3)
console.log(...arr)

// fusionar array

let arr = ["manzana", "pera", "banana"];
let arr2 = ["Kiwi", "naranja"];

console.log(arr)

let arr3 = [...arr, ...arr2]

console.log(arr3)

// parametro rest y argumento rest

const sumar = ( num1, num2,num3,num4) =>{
    console.log(num1 + num2 + num3 + num4)
}


let arr = [3,6,4,1]

sumar(...arr)