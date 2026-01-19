let str = 'entertainment';

console.log(str.indexOf('n')); // 1
console.log(str.indexOf('n', 2)); // 8 (start searching 'n' from index 2)
console.log(str.lastIndexOf('n')); // 11

console.log(str.indexOf('w')); // -1 
console.log(str.includes('w')); // false

console.log(str.startsWith('ent')); // true
console.log(str.startsWith('ant')); // false

console.log(str.endsWith('ent')); // true
console.log(str.endsWith('ant')); // false