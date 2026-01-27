let arr = [10, 20, 30, 40, 10, 10, 10, 30, 30, 30, 20, 20]

let uniqueSet = new Set(arr);
console.log(uniqueSet); // { 10, 20, 30, 40 }

// convert Set to Array
let uniqueArr = [...uniqueSet];
console.log(uniqueArr)