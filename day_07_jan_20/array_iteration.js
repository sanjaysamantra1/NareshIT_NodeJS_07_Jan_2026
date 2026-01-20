let cars = ['Tata', 'Honda', 'Maruti', 'Hyundai'];

// 1. for loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('===========')

// 2. for-in 
for (let i in cars) {
    console.log(cars[i]);
}
console.log('===========')

// 3. for-of
for (let car of cars) {
    console.log(car)
}
console.log('===========')


// forEach()
cars.forEach((val, ind) => {
    console.log(val, ind)
})