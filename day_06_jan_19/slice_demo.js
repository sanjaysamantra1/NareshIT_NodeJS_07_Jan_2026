let str = 'javascript';

console.log(str.slice(0,4)); // java
console.log(str.substring(0,4)); // java

console.log(str.slice(4)); // script
console.log(str.substring(4)); // script

// Note: slice(-ve) works with -ve index also, substring() doesn't
console.log(str.slice(0,-2)); // javascri
console.log(str.substring(0,-2)); // ''