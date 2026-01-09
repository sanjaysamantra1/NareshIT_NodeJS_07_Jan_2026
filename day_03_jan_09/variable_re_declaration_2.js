var a = 10;
let b = 20;
const c = 30;
console.log(`Global Scope::  a:${a} b:${b} c:${c}`);

function f1() {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(`Function Scope::  a:${a} b:${b} c:${c}`);

    if (true) {
        var a = 1000;
        let b = 2000;
        const c = 3000;
        console.log(`Block Scope::  a:${a} b:${b} c:${c}`);
    }
}
f1();