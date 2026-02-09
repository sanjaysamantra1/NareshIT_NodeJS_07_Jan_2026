const f1 = function () {
    console.log('I am f1...')
}
const f2 = function () {
    console.log('I am f2...')
}
const f3 = function () {
    console.log('I am f3...')
}
const f4 = function () {
    console.log('I am f4...')
}

f1();
setTimeout(f2, 0);
Promise.resolve().then(f3);
f4();