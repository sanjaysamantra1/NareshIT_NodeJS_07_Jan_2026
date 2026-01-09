// var allows us to declare 2 or more variables with the same name in the same scope
var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a} b:${b} c:${c}`);

var a = 100;
console.log(`a:${a} b:${b} c:${c}`);

var a = 1000;
console.log(`a:${a} b:${b} c:${c}`);

// let b = 200;  // cann't re-declare
// const c;      // cann't re-declare
 