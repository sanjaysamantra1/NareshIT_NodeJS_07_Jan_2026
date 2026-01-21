let arr = [10, 20, 30, 40, 50];

let sum = 0;
for (ele of arr) {
    sum = sum + ele;
}
console.log('Sum ', sum)

// find the sum of all the numbers using reduce
let res1 = arr.reduce((prev, curr) => {
    console.log(prev, curr)
    return prev + curr;
}, 0);
console.log(res1)