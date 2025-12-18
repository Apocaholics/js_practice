const number = Math.round(Math.random() * 10)
let counter = 1

for (let i = 1; i <= 10; i++){
    let result = number * i
    console.log(`${number} x ${i} = ${result}`)
}

while(counter <= 10){
    let result = number * counter
    console.log(`${number} x ${counter} = ${result}`)
    counter++
}
