let user = { name: 'Sanjay', age:40 };
console.log('phone: ', user.phone); // undefined
console.log('city: ', user?.address?.city); // error when ?. is not used
console.log('name: ', user.name);