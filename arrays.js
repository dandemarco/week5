let animals = ['duck', 'bear', 'squirrel']

console.log(animals)        //duck, bear, squirrel
console.log(animals[0])     //duck8

//push: Add elephant to end of array
animals.push('elephant')    
console.log(animals)

//unshift: Add deer to start of array
animals.unshift('deer')     
console.log(animals)

//shift(): Removes the first element of the array and puts it in a variable
let firstAnimal = animals.shift() 
console.log(firstAnimal)
console.log(animals)

//pop(): Removes the last element of the array and puts it in a variable
let lastAnimal = animals.pop() 
console.log(lastAnimal)
console.log(animals)

//push and pop are more common than shift and unshift

animals.reverse()           //reverse(): reverses order of array
animals.sort()              //sort(): sorts array in abc/123 order

let numberOfAnimals = animals.length    //length(): measures length of array

//indexOf(): find position of specific element in array
console.log(animals.indexOf('lion'))    

//returns "-1" if element is not in the array
if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}
if (animals.includes('cheetah')) {
    console.log("Cheetah is in the array")
}

//join(): Lists elements in array with punctuation included in parentheses
console.log(animals.join(' * '))

//forEach(): Loops over array to extract data
//Loop to print each animal name
animals.forEach(function(animalName) {
    console.log(animalName)
})

//Loop to print length of each animal name
animals.forEach(function(animalName) {
    let animalNameLength = animalName.length
    console.log(animalNameLength)
})

//Create new array with animal lengths
let lengthArray = []
animals.forEach(function(animalName) {
    let animalNameLength = animalName.length
    lengthArray.push(animalNameLength)
})

console.log(lengthArray)
