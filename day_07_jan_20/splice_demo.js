let arr = [10, 20, 30, 40, 50];

// splice 1. only delete 2. only add 3. both add & delete 
// arr.splice(index , howmany items to delete , what to insert)
arr.splice(1, 2); // only delete
console.log(arr);  // [ 10, 40, 50 ]

arr.splice(1, 0, 20, 30); // only add
console.log(arr); // [10, 20, 30, 40, 50]

arr.splice(1, 2, 25, 35); // both add & delete
console.log(arr); // [ 10, 25, 35, 40, 50 ]