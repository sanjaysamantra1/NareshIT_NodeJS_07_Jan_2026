let str = 'entertainmEnt';

// using object
let obj = {};
for (char of str) {
    if (obj[char]) {
        obj[char] = obj[char] + 1;
    } else {
        obj[char] = 1;
    }
}
console.log(obj);

// using Map
let charMap = new Map();
for (char of str) {
    char = char.toLowerCase();
    if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1)
    } else {
        charMap.set(char, 1)
    }
}
console.log(charMap)
