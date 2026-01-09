for (var i = 1; i <= 3; i++) {
    console.log('inside loop ', i)
}
console.log('outside loop ', i); // i is accessible here, its a limitation of var


for (let j = 1; j <= 3; j++) {
    console.log('inside loop ', j)
}
console.log('outside loop ', j);