function gpa(score) {
    if (score >= 0 && score <=4) {
        return true
    } else {
        return false
    }
}


console.log(gpa('4'))

console.log(gpa('5'))

console.log(gpa('-1'))

function citystate(city, state) {
    let citystateFormatting = `${city}, ${state.toUpperCase()}`
    return citystateFormatting
}

console.log(citystate("Minneapolis", "mn"))