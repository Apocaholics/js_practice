function counter(num) {
    console.log(num)

    try {
        num -= 1

        if (num >= 0) {
            counter(num)
        }
    } catch (e) {
        console.error(e.message)
    }
}

counter(8)