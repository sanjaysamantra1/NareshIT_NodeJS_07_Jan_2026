// Print the occurence of each character in a string
let str = 'entertainment';

let obj = {};
for (char of str) { // char = 'e'
    console.log(obj);
    if (obj[char]) {
        obj[char] = obj[char] + 1;
    } else {
        obj[char] = 1;
    }
}
console.log(obj);