const numbers = [1, 2, 3, 4, 5]
const mutatedNumbers = numbers.map((number) => {
    return number * numbers.indexOf(number)
})

console.log(mutatedNumbers)