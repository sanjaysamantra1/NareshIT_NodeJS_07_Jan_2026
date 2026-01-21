let str = 'NareshIT';

// Reverse this string using reduce()
let revStr = str.split('').reduce((prev, curr) => {
    console.log(prev, curr)
    return curr + prev;
}, '');
console.log(revStr)
