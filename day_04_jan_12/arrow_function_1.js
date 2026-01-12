let arr = [10, 20, 30, 40, 50];

function incrementBy5(ele) {
    return ele + 5;
}
let res1 = arr.map(incrementBy5)
console.log(res1);


let res2 = arr.map((ele) => ele + 5);
console.log(res2);