// 1. Function Declaration
add(2, 3);
function add(a, b) {
    console.log(`Addition is: ${a + b}`)
}
add(10, 20);


// 2. Function Expression
// sub(3,2);
let sub = function (a, b) {
    console.log(`Subtraction is: ${a - b}`)
}
sub(20, 10);


// 3. Self Invoked Function Expressions
(function (a, b) {
    console.log(`Multiplication is: ${a * b}`)
})(10, 20);


// 4. Arrow Functions
let div = (a, b) => {
    console.log(`Division is: ${a / b}`)
}
div(20, 10);
