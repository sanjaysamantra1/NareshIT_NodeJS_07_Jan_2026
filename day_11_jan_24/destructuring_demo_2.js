let arr = [10, 20, 30, 40, 50, 60, 70];

//es_5
var x = arr[0];
var y = arr[1];
var z = arr[2];
console.log(x, y, z);

//es_6
let [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);

let myArr = [10, 20, [30, 31, 32], 40, 50];
let [p, q, r] = myArr;
let [r1, r2] = r;
console.log(p, q, r1, r2)