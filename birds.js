let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach(function(bird) {
    //repeat once for each object in array
    console.log(bird)
})

// traditional for loop
for (let x = 0; x < birds.length; x = x+1) {
    let bird = birds[x]
    console.log(bird)
}
