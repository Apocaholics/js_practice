let age = 18
let persone1 = 17
let persone2 = 18
let persone3 = 19
let randomAge = Math.round(Math.random() * 100)

console.log(persone1 >= age ? "Person are adult" : "Person aren't adult")
console.log(persone2 >= age ? "Person are adult" : "Person aren't adult")
console.log(persone3 >= age ? "Person are adult" : "Person aren't adult")
console.log(randomAge >= age ? `Age is  ${randomAge}, Person are adult` : `Age is  ${randomAge}, Person aren't adult`)