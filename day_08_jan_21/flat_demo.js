let arr = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];
console.log(arr, arr.length); // 3

let res1 = arr.flat();
console.log(res1, res1.length); // 5

let res2 = arr.flat(2);
console.log(res2, res2.length); // 7

let res3 = arr.flat(Infinity);
console.log(res3, res3.length); // 10