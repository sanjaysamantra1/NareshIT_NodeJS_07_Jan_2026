let str = 'This is Nodejs class, This is string class';

// replace 'class' by 'session'
let res1 = str.replace('class', 'session');
console.log(res1);

let res2 = str.replaceAll('class', 'session');
console.log(res2);

let res3 = str.replace(/class/g, 'session');
console.log(res3);