console.log("Hello world!")

//three ways to creatie variables

let color = 'blue'

var size = 'medium'     //not recommended, apparently

const language = 'JavaScript' //can't change this value

let todayTemp = 75

console.log('Today\'s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')