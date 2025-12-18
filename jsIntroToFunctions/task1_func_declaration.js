function getRectangleArea(width, height){
    try {
        if (typeof(width) === 'number' && typeof(height) === 'number'){
            return width * height
        } else {
            throw new Error("Одне зі значень не число або є пустим")
        }
    } catch (e){
        console.error(e.message)
    }
}

console.log(getRectangleArea(2, 3))
console.log(getRectangleArea(4))
console.log(getRectangleArea())