var a = 10;
let b = 20;  // global
const c = 30;
console.log(`Global Scope::  a:${a} b:${b} c:${c}`);

function f1() {
    console.log('f1 starts...')
    var d = 40; // function scoped
    e = 50; // global scope
    console.log('a ', a);
    console.log('b ', b);
    console.log('c ', c);
    console.log('d ', d);
    console.log('e ', e);
    console.log('f1 ends...')
}
f1();
function f2() {
    console.log('f2 starts...')
    console.log('a ', a);
    console.log('b ', b);
    console.log('c ', c);
    // console.log('d ', d);   // d is not defined
    console.log('e ', e);
    console.log('f2 ends...')
}
f2();

// Note: the variables declared without var/let/const are global scoped, no matter where declared