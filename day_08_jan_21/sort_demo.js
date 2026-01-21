let arr1 = [20, 50, 10, 30, 40];
arr1.sort();
console.log(arr1);

let arr2 = [10, 9, 7, 8, 101, 104, 91, 92, 93, 105, 106];
arr2.sort(); // string comparision
console.log(arr2);


arr2.sort((a, b) => a - b); // numeric sort Asc
console.log(arr2)
