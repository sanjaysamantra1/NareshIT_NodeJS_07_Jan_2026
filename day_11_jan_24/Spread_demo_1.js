// Spread = To Break Array/Object to individual values
let arr1 = [10, 20, 30]
let arr2 = [...arr1]; // spread (shallow copy)


console.log(Math.max(10, 20, 30)); // 30
console.log(Math.max(arr1)); // NaN  , max() is not expecting arr as arguement
console.log(Math.max(...arr1)); // 30
