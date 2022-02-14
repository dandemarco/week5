let user = {
    username: 'Zoe',
    password: 'kittens',
    userID: 1,
    roles: ['user', 'admin'],   //roles value is an array
    contact: {                  //contact value is another object
        phone: '123-456-7890',
        office: 'T.1400'
    }
}

//change userID
user.userID = 101
console.log(user)

//Print roles array
console.log('User roles are: ', user.roles)

//Print roles array, other syntax
console.log('User roles are: ', user['roles'])

//Print first role
console.log('User\'s first role is' + user.roles[0])

//Print all user roles
console.log('All the user roles are: ')
user.roles.forEach(function(role) {
    console.log(role)
})

//Change office
user.contact.office = 'M.1234'
console.log('New office is ' + user.contact.office)

//Access nested values
console.log('User phone number is ' + user.contact.phone)

//Add another attribute to user object
user.email = 'zoe@minneapolis.edu'
