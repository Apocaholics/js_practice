import chalk from 'chalk'

/*---------------------------------------
                Task 4.1
---------------------------------------*/
const pi = Math.PI
let rad = Math.round(Math.random() * 100)

let circleArea = Number((pi * Math.pow(rad, 2)).toFixed(2))
console.log(chalk.red.bold('Area for circle is:\n') + chalk.bgGreen.bold(circleArea))

/*---------------------------------------
                Task 4.2
---------------------------------------*/
let width = (Math.random() * 100).toFixed(2)
let length = (Math.random() * 100).toFixed(2)

let rectangleArea = Number((width * length).toFixed(2))
console.log(chalk.red.bold('Area for rectangle is:\n') + chalk.bgGreen.bold(rectangleArea))

/*---------------------------------------
                Task 4.3
---------------------------------------*/
let height = Math.round(Math.random() * 100)

let cylinderArea = Number((pi * Math.pow(rad, 2) * height).toFixed(2))
console.log(chalk.red.bold('Area for cylinder is:\n') + chalk.bgGreen.bold(cylinderArea))