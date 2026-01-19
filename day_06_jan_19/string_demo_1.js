let str1 = 'Hello';   // String Literal
let str2 = 'Hello';   // String Literal

let str3 = new String('Hello');    // String Object
let str4 = new String('Hello');    // String Object

console.log(typeof str1); // string
console.log(typeof str3); // Object

console.log(str1 == str2); // true
console.log(str2 == str3); // true
console.log(str3 == str4); // false (address comparision)