//Input
const numberKm = prompt("Quanti chilometri vuoi percorrere?")
const age = prompt("Quanti anni hai?")

if (isNaN(numberKm) || isNaN(age))  {
    alert("chilometri ed età devono essere dei numeri! ");}
    else{
const userKm = parseInt(numberKm);
const userAge = parseInt(age);
console.log(numberKm, age, userKm, userAge);

//Esecuzione logica
let totalPrice;

let partialPrice = (0.21 * userKm);
console.log(partialPrice);

let discount;
if(userAge<18){
    discount = (partialPrice * 20) / 100
} 
else if (age>65){
    discount = (partialPrice * 40) / 100
} 
else {  discount = 0;}

console.log(discount);


totalPrice = (partialPrice - discount).toFixed(2);
let result = `il costo del biglietto è ${totalPrice}€`

//Output
console.log(result);
}