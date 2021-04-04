require('./db');

const { Business } = require('./db');
const faker = require('faker');


for (let index = 0; index < 10; index++) {
    Business.create({
        name: faker.company.companyName(),
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
        comune: faker.address.country(),
        region: faker.address.state()
    })
    
}


