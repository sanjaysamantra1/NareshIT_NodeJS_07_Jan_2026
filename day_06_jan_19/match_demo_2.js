let str = 'Ram and Hari are 2 friends, Ram is 14 & Hari is 16 years old';

// Write a REGEX to find all the numeric values: 2 , 14 , 16
let res = str.match(/\d{1,2}/g);
console.log(res)
