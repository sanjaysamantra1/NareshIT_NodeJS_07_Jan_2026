'use strict'
function add(a, a, a) {
    console.log(a + a + a); // a = 30 (latest value)
}
add(10, 20, 30);

// this code works in normal mode
// this code doesnt work in strict mode : Duplicate parameter name not allowed