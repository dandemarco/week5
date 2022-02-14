let user = {
    name: 'Dan',
    email: 'itsdandemarco@gmail.com',
    password: 'dragonpartz4ever',
    roles: ['singer', 'songwriter'],   
    contact: {                  
        phone: '484-653-8922',
        office: '2310 Milwaukee Ave'
    }
}

//Add salary attribute to object
user.salary = 'A cool million.'

//Add server admin to roles
user.roles.push('server admin')
console.log(user)
