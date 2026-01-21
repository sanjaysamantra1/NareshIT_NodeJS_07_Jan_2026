let str = 'entertainment';
// display char occurance {e:3 , n:3 ,t:2 ,r:1...}
let res = str.split('').reduce((obj, char) => {
    if (obj[char]) {
        obj[char] = obj[char] + 1;
    } else {
        obj[char] = 1;
    }
    return obj
}, {});
console.log(res)
