function checkOrder(available, ordered) {
    try {
        if (typeof (available) === 'number' && typeof (ordered) === 'number') {
            if (available < ordered) {
                return "Your order is too large, we don’t have enough goods."
            }

            if (ordered === 0) {
                return "Your order is empty"
            }

            return "Your order is accepted"
        } else {
            throw new Error("Одне зі значень не число або є пустим")
        }
    } catch (e) {
        console.error(e.message)
    }
}

console.log(checkOrder(10, 5))
console.log(checkOrder(10, 11))
console.log(checkOrder(10, 0))
console.log(checkOrder(10))
console.log(checkOrder(10, "5"))