// how const works with array and object
const arr = [10, 20];
arr[0] = 15;  // update - yes
delete arr[1];
arr.push(30);
console.log('arr ', arr);
// arr = [100,200];  a new array cannt be assigned

const obj = { a: 10, b: 20 }
obj.a = 15;   // update - yes
delete obj.b; // update - yes
obj.c = 30;   // update - yes
console.log(obj); // { a: 15, c: 30 }