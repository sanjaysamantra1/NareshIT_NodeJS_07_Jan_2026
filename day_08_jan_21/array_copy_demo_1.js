let arr1 = [10, 20];
let arr2 = arr1;  // Reference Copy
// a new array is not being created both arr1 & arr2 variables are pointing to the same array
arr1.push(30);
arr2.push(40);
console.log('arr1: ', arr1); // [10,20,30,40]
console.log('arr2: ', arr2); // [10,20,30,40]

// Shallow Copy - Top level items are copied by value, nested arrays are copied by reference
let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // shallow copy - Spread Operator
arr4.push(40, 50);
arr4[2].push(32, 33);
console.log('arr3: ', arr3); // [ 10, 20, [ 30, 31, 32, 33 ] ]
console.log('arr4: ', arr4); // [ 10, 20, [ 30, 31, 32, 33 ], 40, 50 ]


// Deep Copy - Everything including nested arrays are copied by value
let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5); // Deep Copy - structuredClone
arr6.push(40, 50);
arr6[2].push(32, 33);
console.log('arr5: ', arr5); // [ 10, 20, [ 30, 31 ] ]
console.log('arr6: ', arr6); // [ 10, 20, [ 30, 31, 32, 33 ], 40, 50 ]