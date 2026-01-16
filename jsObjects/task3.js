const car1 = {
    brand: "BMW",
    model: "M3",
    year: 2006
}

const car2 = {
    brand: "Toyota",
    model: "Corolla Cross",
    owner: "Mark"
}

const car3 = { ...car1, ...car2 }

console.log(car3)