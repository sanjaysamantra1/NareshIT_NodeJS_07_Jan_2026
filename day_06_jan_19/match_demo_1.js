let str = 'Rain in spain mAinly stays in the plain';

let res1 = str.match(/ain/);
console.log(res1);

let res2 = str.match(/ain/g);
console.log(res2);

let res3 = str.match(/ain/gi);
console.log(res3);