// Print the max occurence char in a string

function max_char_count(str) {
    let maxChar = '';
    let maxCount = 0;

    let obj = {};
    for (char of str) {
        obj[char] = obj[char] ? obj[char] + 1 : 1;
        let charCount = obj[char];
        if (charCount > maxCount) {
            maxChar = char;
            maxCount = charCount;
        }
    }
    return { maxChar, maxCount }
}
console.log(max_char_count('hello world')); // l=3

