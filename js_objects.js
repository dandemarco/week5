//create an object with {} - contains properties
//properties are name: value pairs
let user = {username: 'Dan', password: 'kittens'}

console.log(user.username)      //Dan
console.log(user['username'])   //Dan

//add new property to existing object
user.email = 'itsdandemarco@gmail.com'
console.log(user)
console.log(user['email'])
