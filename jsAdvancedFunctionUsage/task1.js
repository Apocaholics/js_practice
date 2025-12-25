function handleNum(number, handleEven, handleOdd) {
    try {
        if (number % 2 === 0) {
            handleEven(number)
        } else {
            handleOdd(number)
        }
    } catch (e) {

    }
}

function handleEven(number) {
    console.log(`${number} is an even number`)
}

function handleOdd(number) {
    console.log(`${number} is an odd number`)
}

let number = Math.round(Math.random() * 100)
handleNum(number, handleEven, handleOdd)