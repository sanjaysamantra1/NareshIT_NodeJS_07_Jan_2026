let str = 'javascript';

console.log('Length: ', str.length);
console.log('toUpperCase: ', str.toUpperCase());
console.log('toLowerCase: ', str.toLowerCase());

console.log('char at index 3: ', str.at(3)); // a
console.log('char at index 3: ', str.charAt(3)); // a
console.log('char at index 3: ', str[3]); // a

console.log('char at index 3: ', str.at(-2)); // p   at() works with -ve index
console.log('char at index 3: ', str.charAt(-2)); // a
console.log('char at index 3: ', str[-2]); // a

console.log('char Code At index 3:', str.charCodeAt(3));  // a = 97

console.log('Virat '.concat('Kohli')); // Virat Kohli