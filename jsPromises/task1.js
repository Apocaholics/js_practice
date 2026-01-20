function delayText(text, delay) {
    setTimeout(() => {
        console.log(text)
    }, delay)
}

delayText("Lorem ipsum", 2000)
