let str = 'Hello Wo$#rld';
str = str.replace(/[^A-Za-z]/g,'');

let result = '';
for (char of str) {
    if (char === char.toUpperCase()) { // is my char upper case
        char = char.toLowerCase();
    } else { // is my char lower case
        char = char.toUpperCase();
    }
    result = result + char;
}
console.log(result)