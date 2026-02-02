console.log('Global Code Starts...')
var a = 10;
let b = 20;
const c = 30;
console.log(`a:${a} b:${b} c:${c}`);

function f3() {
    console.log('f3 starts...')
    console.log('f3 ends...')
}
function f2() {
    console.log('f2 starts...')
    f3();
    console.log('f2 ends...')
}
function f1() {
    console.log('f1 starts...')
    f2();
    console.log('f1 ends...')
}
f1()

console.log('Global Code Ends...')