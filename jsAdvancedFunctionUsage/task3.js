function divide(numerator, denominator) {
    console.log(`Починаю ділення ${numerator} на ${denominator} ...`)

    if (denominator === 0) {
        throw new Error("Ділення на нуль неможливо")
    }

    if (typeof (numerator) === 'number' && typeof (denominator) === 'number') {
        return numerator / denominator
    } else {
        throw new Error("Одне зі значень не число")
    }
}

try {
    console.log(divide(10, 2))
} catch (e) {
    console.error(e.message)
} finally {
    console.log("Робота завершена")
}

try {
    divide(10, 0)
} catch (e) {
    console.error(e.message)
} finally {
    console.log("Робота завершена")
}

try {
    divide(10, "32")
} catch (e) {
    console.error(e.message)
} finally {
    console.log("Робота завершена")
}