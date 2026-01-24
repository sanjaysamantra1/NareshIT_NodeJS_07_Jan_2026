// object de-structuring
let user = {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
    },
    "phone": "1-770-736-8031 x56442"
}
// es_5
console.log('name: ', user.name);
console.log('email: ', user.email);
console.log('street: ', user.address.street);
console.log('city: ', user.address.city);

// es_6 de-structuring
let { name, email, phone, address: { street, city } } = user;
console.log(name, email, phone, street, city)